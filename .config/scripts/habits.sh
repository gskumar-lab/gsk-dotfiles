
#!/usr/bin/env bash

set -euo pipefail

HABIT_FILE="$HOME/.todo/habits.db"
LOCK_FILE="$HABIT_FILE.lock"

mkdir -p "$(dirname "$HABIT_FILE")"
touch "$HABIT_FILE"

command -v fzf >/dev/null 2>&1 || { echo "fzf required"; exit 1; }
command -v flock >/dev/null 2>&1 || { echo "flock required"; exit 1; }

exec 200>"$LOCK_FILE"
flock -n 200 || { echo "Another instance running"; exit 1; }

export HABIT_FILE

today=$(date +%F)

if yesterday=$(date -d "yesterday" +%F 2>/dev/null); then :
elif yesterday=$(date -v-1d +%F 2>/dev/null); then :
else echo "date unsupported"; exit 1
fi

GREEN="\033[32m"
YELLOW="\033[33m"
RED="\033[31m"
BOLD="\033[1m"
RESET="\033[0m"

next_id() {
    awk -F'|' 'NF>=1 && $1~/^[0-9]+$/ {if($1>max) max=$1} END{print (max?max+1:1)}' "$HABIT_FILE"
}

sanitize() {
    printf "%s" "$1" | tr '\n\t|' '   _'
}

trim() {
    local s="$1"
    s="${s#"${s%%[![:space:]]*}"}"
    s="${s%"${s##*[![:space:]]}"}"
    printf "%s" "$s"
}

format_habits() {
awk -F'|' -v today="$today" -v yesterday="$yesterday" \
-v GREEN="$GREEN" -v YELLOW="$YELLOW" -v RED="$RED" \
-v BOLD="$BOLD" -v RESET="$RESET" '
function status(last){ if(last==today) return 0; if(last==yesterday) return 1; return 2 }
{
    id=$1; name=$2; last=$4; streak=$5
    best=(NF>=7 && $7!=""?$7:streak)

    s=status(last)
    if(s==0){c=GREEN BOLD;m="[✔]"}
    else if(s==1){c=YELLOW;m="[ ]"}
    else{c=RED;m="[✘]"}

    printf "%d|%d|%s\n",s,-streak,
    sprintf("%-4s | %s%s%s | %s | 🔥 %-3s (🏆 %s)",id,c,name,RESET,m,streak,best)
}' "$HABIT_FILE" |
sort -t'|' -k1,1n -k2,2n | cut -d'|' -f3-
}

update_history(){
    hist="$1"; val="$2"
    hist="${hist:-}"
    hist+="$val,"
    echo "$hist" | awk -F',' '{start=(NF>30?NF-30:1); for(i=start;i<NF;i++) printf $i","}'
}

add_habit(){
    read -rp "Habit name: " name
    read -rp "Note: " note
    name=$(sanitize "$(trim "$name")")
    note=$(sanitize "$(trim "$note")")
    [[ -z "$name" ]] && return
    printf "%s|%s|%s||0|%s|0|\n" "$(next_id)" "$name" "$today" "$note" >> "$HABIT_FILE"
}

delete_habit(){
    id="$1"

    # get habit name for confirmation
    name=$(awk -F'|' -v id="$id" '$1==id{print $2}' "$HABIT_FILE")
    [[ -z "$name" ]] && return

    read -rp "Delete habit [$id: $name]? (y/N): " confirm
    case "$confirm" in
        y|Y) ;;
        *) return ;;
    esac

    tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT

    awk -F'|' -v id="$id" '$1!=id' "$HABIT_FILE" > "$tmp" && mv "$tmp" "$HABIT_FILE"
}

toggle_habit(){
    id="$1"; 
    tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT

    awk -F'|' -v id="$id" -v today="$today" -v yesterday="$yesterday" '
    BEGIN{OFS="|"}
    {
        if($1==id){
            best=($7==""?$5:$7)+0
            hist=$8

            if($4==today){
                $4=yesterday
                if($5>0)$5--
                hist=hist"0,"
            } else {
                if($4==yesterday)$5++; else $5=1
                $4=today
                hist=hist"1,"
            }

            if($5>best)best=$5
            $7=best; $8=hist
        }
        print
    }' "$HABIT_FILE" > "$tmp" && mv "$tmp" "$HABIT_FILE"
}

preview(){
cat <<'EOF'
bash -c '
line="$1"; id="${line%% *}"
awk -F"|" -v id="$id" '\''
$1==id{
 printf "\nHabit   : %s\nNote    : %s\nCreated : %s\nLast    : %s\nStreak  : %s\nBest    : %s\n",$2,$6,$3,($4==""?"Never":$4),$5,$7
 if($8!=""){
  split($8,h,","); done=0; c=0
  for(i in h) if(h[i]!=""){c++; if(h[i]=="1")done++}
  if(c>0) printf("Consistency: %.0f%%\n",(done/c)*100)
  printf "\nHeatmap:\n"; for(i in h) if(h[i]=="1")printf "▓"; else if(h[i]=="0")printf "░"; printf "\n"
  printf "\nLast 7 days:\n"; start=(c>7?c-6:1); idx=0
  for(i in h) if(h[i]!=""){idx++; if(idx>=start){if(h[i]=="1")printf "✔ "; else printf "✘ "}}
  printf "\n"
 }
}'\'' "$HABIT_FILE"
' _ {}
EOF
}

while true; do
header=$'ctrl+n add | ctrl+d delete | enter toggle | ctrl+q quit'
mapfile -t out < <(
 format_habits |
 fzf --ansi --expect=ctrl-n,ctrl-d,ctrl-q,esc \
     --prompt=" Habits > " \
     --header-first \
     --header "$header" \
     --preview "$(preview)" \
     --layout=reverse \
     --border \
     --preview-window=right:40%
)

[[ ${#out[@]} -eq 0 ]] && exit

key=""; line=""
if [[ ${#out[@]} -eq 1 ]]; then
 [[ "${out[0]}" =~ ctrl ]] && key="${out[0]}" || line="${out[0]}"
else
 key="${out[0]}"; line="${out[1]}"
fi

case "$key" in
 ctrl-n) add_habit; continue ;;
 ctrl-q|esc) exit ;;
esac

[[ -z "$line" ]] && continue
id=$(awk '{print $1}' <<< "$line")

case "$key" in
 ctrl-d) delete_habit "$id" ;;
 "") toggle_habit "$id" ;;
esac

done

