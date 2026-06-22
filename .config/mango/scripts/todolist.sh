#!/usr/bin/env bash

TODO_FILE="$HOME/.todo/tasks.db"
mkdir -p "$(dirname "$TODO_FILE")"
touch "$TODO_FILE"

# Colors
RED="\033[31m"
YELLOW="\033[33m"
GREEN="\033[32m"
DIM="\033[2m"
BOLD="\033[1m"
RESET="\033[0m"

today=$(date +%F)

# -------- CORE --------

next_id() {
    [[ ! -s "$TODO_FILE" ]] && echo 1 && return
    awk -F'|' 'END {print $1+1}' "$TODO_FILE"
}

# -------- FORMAT --------
format_tasks() {
    local sort_mode=$1
    # Sort by: Status Category -> Priority -> Due Date
    local sort_cmd="sort -t'|' -k1,1n -k2,2n -k3,3"
    
    if [[ "$sort_mode" == "date" ]]; then
        sort_cmd="sort -t'|' -k1,1n -k3,3 -k2,2n"
    fi

    awk -F'|' -v RED="$RED" -v YELLOW="$YELLOW" -v GREEN="$GREEN" \
        -v DIM="$DIM" -v RESET="$RESET" -v BOLD="$BOLD" -v today="$today" '

    function prio_val(p) { return (p=="H"?1:(p=="M"?2:3)) }

    {
        id=$1; status=$2; prio=$3; created=$4; due=$5; title=$6; desc=$7

        # Determine Category Logic
        # 0 = Overdue, 1 = Pending, 2 = Done
        is_overdue = (due!="" && due < today && status=="PENDING")
        if (is_overdue) {
            status_cat = 0
            color = RED BOLD
        } else if (status == "PENDING") {
            status_cat = 1
            color = (prio=="H"?RED:(prio=="M"?YELLOW:GREEN))
        } else {
            status_cat = 2
            color = DIM
        }

        statemark = (status=="DONE"?DIM"[✔]"RESET:"[ ]")
        
        display = sprintf("%-4s | %s%s%s | %s | %-10s | %s",
            id, color, prio, RESET, statemark, (due==""?"--":due), title)

        sort_due = (due=="" ? "9999-12-31" : due)
        
        # Output: category | priority | date | id [TAB] display_string
        print status_cat "|" prio_val(prio) "|" sort_due "|" id "\t" display
    }' "$TODO_FILE" \
    | eval "$sort_cmd" \
    | awk -F'\t' -v RED="$RED" -v BOLD="$BOLD" -v RESET="$RESET" '
    BEGIN {ov=0; p=0; d=0}
    {
        split($1, meta, "|")
        cat=meta[1]
        display=$2

        if (cat==0 && !ov) {
            print "SECTION\t" RED BOLD "-- OVERDUE --" RESET
            ov=1
        }
        if (cat==1 && !p) {
            print "SECTION\t-- PENDING --"
            p=1
        }
        if (cat==2 && !d) {
            print "SECTION\t-- COMPLETED --"
            d=1
        }
        print "TASK\t" display
    }'
}

# -------- ACTIONS --------

date_picker() {
    local current_month=$(date +%Y-%m-01)

    while true; do
        # Header
        month_label=$(date -d "$current_month" "+%B %Y")

        # Generate dates of current month
        dates=$(cal $(date -d "$current_month" +%m) $(date -d "$current_month" +%Y) \
            | awk 'NF {for(i=1;i<=NF;i++) print $i}' \
            | grep -E '^[0-9]+$' \
            | while read d; do
                date -d "$(date -d "$current_month" +%Y-%m)-$d" "+%Y-%m-%d (%a)"
            done)

        # Add navigation options
        choice=$(printf "<< Prev Month\n%s\nNext Month >>\n%s" "$month_label" "$dates" \
            | fzf --prompt="📅 $month_label > " --height=20 --border)

        case "$choice" in
            "<< Prev Month")
                current_month=$(date -d "$current_month -1 month" +%Y-%m-01)
                ;;
            "Next Month >>")
                current_month=$(date -d "$current_month +1 month" +%Y-%m-01)
                ;;
            "")
                return 1
                ;;
            *)
                echo "$choice" | cut -d' ' -f1
                return
                ;;
        esac
    done
}


add_task() {
    read -rp "Title: " title
    read -rp "Description: " desc
    prio=$(printf "High\nNormal\nLow" | fzf --prompt="Priority > " --height=10)
    case "$prio" in
        High) prio="H" ;;
        Low) prio="L" ;;
        *) prio="M" ;;
    esac
    due=$(date_picker)
    [[ -z "$due" ]] && echo "No date selected" && return
    created=$(date +%F)
    echo "$(next_id)|PENDING|$prio|$created|$due|$title|$desc" >> "$TODO_FILE"
}

delete_task() {
    id="$1"
    read -rp "Delete task $id? (y/n): " c
    [[ "$c" != "y" ]] && return
    awk -F'|' -v id="$id" '$1!=id' "$TODO_FILE" > "$TODO_FILE.tmp" && mv "$TODO_FILE.tmp" "$TODO_FILE"
}

toggle_task() {
    local id="$1"
    # Fetch current status to show in the prompt
    local current_status=$(awk -F'|' -v id="$id" '$1==id {print $2}' "$TODO_FILE")
    local next_status="DONE"
    [[ "$current_status" == "DONE" ]] && next_status="PENDING"

    # Confirmation Prompt
    read -rp "Mark task $id as $next_status? (y/n): " confirm
    [[ "$confirm" != "y" ]] && return

    # Perform the toggle
    awk -F'|' -v id="$id" 'BEGIN{OFS="|"}
    $1==id {$2 = ($2=="PENDING"?"DONE":"PENDING")}
    {print}' "$TODO_FILE" > "$TODO_FILE.tmp" && mv "$TODO_FILE.tmp" "$TODO_FILE"
}


edit_task() {
    id="$1"
    line=$(grep "^$id|" "$TODO_FILE")
    IFS='|' read -r _ status prio created due title desc <<< "$line"

    read -rp "Title [$title]: " nt
    read -rp "Desc [$desc]: " nd
    nprio=$(printf "High\nNormal\nLow" | fzf --prompt="Priority > ")
    case "$nprio" in
        High) nprio="H" ;;
        Low) nprio="L" ;;
        "") nprio="$prio" ;;
        *) nprio="M" ;;
    esac
    ndue=$(date_picker)
    ndue=${ndue:-$due}
    nt=${nt:-$title}
    nd=${nd:-$desc}
    ndue=${ndue:-$due}

    awk -F'|' -v id="$id" -v t="$nt" -v d="$nd" -v p="$nprio" -v due="$ndue" '
    BEGIN{OFS="|"}
    $1==id {$3=p;$5=due;$6=t;$7=d}
    {print}' "$TODO_FILE" > "$TODO_FILE.tmp" && mv "$TODO_FILE.tmp" "$TODO_FILE"
}

# -------- PREVIEW --------

preview() {
cat <<'EOF'
bash -c '
line="$1"
[[ "$line" =~ ^-- ]] && exit
id=$(printf "%s" "$line" | cut -d"|" -f1 | xargs)
awk -F"|" -v id="$id" '"'"'
$1==id {
    printf "\nTitle : %s\n", $6
    printf "Desc  : %s\n", $7
    printf "Prio  : %s\n", $3
    printf "Due   : %s\n", $5
    printf "Stat  : %s\n", $2
}
'"'"' "$HOME/.todo/tasks.db"
' _ {}
EOF
}

# -------- DASHBOARD --------

SORT_MODE="priority"

while true; do
    clear
    header="ctrl+N: New   ctrl+D: Delete   ctrl+E: Edit  ENTER: Toggle  \nctrl+S: Sort ($SORT_MODE)  ctrl+Q/Esc: Quit"

    mapfile -t out < <(
        format_tasks "$SORT_MODE" \
        | cut -f2 \
        | fzf \
            --ansi \
            --expect=ctrl-n,ctrl-d,ctrl-e,ctrl-s,ctrl-q,esc \
            --prompt="Todo ($SORT_MODE) > " \
            --header-first \
            --header "$(printf "$header")" \
            --layout=reverse \
            --border \
            --preview "$(preview)" \
            --preview-window=right:40%:wrap
    )

    key="${out[0]}"
    line="${out[1]}"

    if [[ "$line" =~ ^-- ]] || [[ -z "$line" ]]; then
        id=""
    else
        id=$(printf "%s" "$line" | cut -d'|' -f1 | xargs)
    fi

    case "$key" in
        ctrl-s) 
            [[ "$SORT_MODE" == "priority" ]] && SORT_MODE="date" || SORT_MODE="priority"
            ;;
        ctrl-n) add_task ;;
        ctrl-d) [[ -n "$id" ]] && delete_task "$id" ;;
        ctrl-e) [[ -n "$id" ]] && edit_task "$id" ;;
        ctrl-q|esc) exit ;;
        "") [[ -n "$id" ]] && toggle_task "$id" ;;
    esac
done
