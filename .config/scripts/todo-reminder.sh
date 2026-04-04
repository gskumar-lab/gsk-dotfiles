#!/usr/bin/env bash

TODO_FILE="$HOME/.todo/tasks.db"
HABIT_FILE="$HOME/.todo/habits.db"
LOG_FILE="$HOME/.todo/reminder.log"

today=$(date +%F)

if yesterday=$(date -d "yesterday" +%F 2>/dev/null); then :
elif yesterday=$(date -v-1d +%F 2>/dev/null); then :
else
    echo "date command unsupported"
    exit 1
fi

notify() {
    local title="$1"
    local body="$2"
    local app="TodoSystem"   # 👈 your app name

    if command -v notify-send >/dev/null; then
        notify-send -a "$app" -u critical "$title" "$body"
    elif command -v osascript >/dev/null; then
        osascript -e "display notification \"$body\" with title \"$title\""
    else
        echo "[$(date)] $title - $body" >> "$LOG_FILE"
    fi
}


########################################
# TODO NOTIFICATION
########################################

if [[ -f "$TODO_FILE" ]]; then
tasks=$(awk -F'|' -v today="$today" '
$2=="PENDING" && $5!="" && $5 <= today {
    status = ($5 < today ? "OVERDUE" : "TODAY")
    printf "%s|%s\n", status, $6
}
' "$TODO_FILE")

if [[ -n "$tasks" ]]; then
    overdue=0
    todayc=0
    msg=""

    while IFS='|' read -r status title; do
        title=$(echo "$title" | tr '\n' ' ')
        if [[ "$status" == "OVERDUE" ]]; then
            ((overdue++))
            msg+="🔥 $title\n"
        else
            ((todayc++))
            msg+="⏳ $title\n"
        fi
    done <<< "$tasks"

    summary=""
    [[ $overdue -gt 0 ]] && summary+="🔥 $overdue overdue  "
    [[ $todayc -gt 0 ]] && summary+="⏳ $todayc today"

    notify "TODO ($summary)" "$(echo -e "$msg" | head -n 10)"
fi
fi

########################################
# HABIT NOTIFICATION
########################################

if [[ -f "$HABIT_FILE" ]]; then
habits=$(awk -F'|' -v today="$today" -v yesterday="$yesterday" '
{
    name=$2
    last=$4

    if(last == today) next

    if(last == ""){
        status="TODAY"
    } else if(last == yesterday){
        status="TODAY"
    } else {
        status="OVERDUE"
    }

    printf "%s|%s\n", status, name
}
' "$HABIT_FILE")

if [[ -n "$habits" ]]; then
    overdue=0
    todayc=0
    msg=""

    while IFS='|' read -r status name; do
        name=$(echo "$name" | tr '\n' ' ')
        if [[ "$status" == "OVERDUE" ]]; then
            ((overdue++))
            msg+="🔥 $name\n"
        else
            ((todayc++))
            msg+="⏳ $name\n"
        fi
    done <<< "$habits"

    summary=""
    [[ $overdue -gt 0 ]] && summary+="🔥 $overdue missed  "
    [[ $todayc -gt 0 ]] && summary+="⏳ $todayc due"

    notify "HABITS ($summary)" "$(echo -e "$msg" | head -n 10)"
fi
fi


