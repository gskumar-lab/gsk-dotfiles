#!/usr/bin/env bash

set -u

TODO="${TODO:-$HOME/todo.txt}"

INTERVAL="${INTERVAL:-900}"      # 15 minutes
WARN_DAYS="${WARN_DAYS:-2}"

STATE_DIR="${XDG_STATE_HOME:-$HOME/.local/state}/todod"

mkdir -p "$STATE_DIR"

notify() {
    local urgency="$1"
    shift

    local action
    action=$(
        notify-send \
            -a todod \
            -u "$urgency" \
            -t 50000 \
            -A open="Open" \
            "Todo" \
            "$*"
    )

    case "$action" in
        open)
            footclient -e tuxedo 
            ;;
    esac
} 

days_until() {
    local due="$1"

    local today_s
    today_s=$(date -d "$(date +%F)" +%s)

    local due_s
    due_s=$(date -d "$due" +%s)

    echo $(((due_s - today_s) / 86400))
}

task_id() {
    printf "%s" "$1" | md5sum | awk '{print $1}'
}

extract_due() {
    local line="$1"

    if [[ $line =~ due:([0-9]{4}-[0-9]{2}-[0-9]{2}) ]]; then
        printf "%s\n" "${BASH_REMATCH[1]}"
        return 0
    fi

    return 1
}

should_notify_overdue() {
    local overdue_days="$1"

    if (( overdue_days <= 7 )); then
        return 0
    elif (( overdue_days <= 30 )); then
        (( overdue_days % 3 == 0 ))
        return
    else
        (( overdue_days % 7 == 0 ))
        return
    fi
}

check_tasks() {

    local today
    today=$(date +%F)

    while IFS= read -r line; do

        [[ -z "${line// }" ]] && continue
        [[ "$line" =~ ^x[[:space:]] ]] && continue

        local due

        if ! due=$(extract_due "$line"); then
            continue
        fi

        local delta
        delta=$(days_until "$due")

        local id
        id=$(task_id "$line")

        #
        # overdue
        #
        if (( delta < 0 )); then

            local overdue_days=$((-delta))

            if should_notify_overdue "$overdue_days"; then

                local stamp
                stamp="$STATE_DIR/${id}.overdue.${today}"

                if [[ ! -f "$stamp" ]]; then

                    notify critical \
                        "OVERDUE (${overdue_days} day(s)): $line"

                    touch "$stamp"
                fi
            fi

        #
        # due soon
        #
        elif (( delta <= WARN_DAYS )); then

            local stamp
            stamp="$STATE_DIR/${id}.warn.${today}"

            if [[ ! -f "$stamp" ]]; then

                if (( delta == 0 )); then
                    notify critical "DUE TODAY: $line"
                else
                    notify normal \
                        "Due in ${delta} day(s): $line"
                fi

                touch "$stamp"
            fi
        fi

    done < "$TODO"
}

pending_summary() {

    local pending=0
    local overdue=0
    local due_today=0

    while IFS= read -r line; do

        [[ -z "${line// }" ]] && continue
        [[ "$line" =~ ^x[[:space:]] ]] && continue

        ((pending++))

        local due

        if ! due=$(extract_due "$line"); then
            continue
        fi

        local d
        d=$(days_until "$due")

        if (( d < 0 )); then
            ((overdue++))
        elif (( d == 0 )); then
            ((due_today++))
        fi

    done < "$TODO"

    notify low \
        "${pending} pending • ${due_today} due today • ${overdue} overdue"
}

startup_summary() {

    local pending=0
    local overdue=0

    while IFS= read -r line; do

        [[ -z "${line// }" ]] && continue
        [[ "$line" =~ ^x[[:space:]] ]] && continue

        ((pending++))

        local due

        if due=$(extract_due "$line"); then

            local d
            d=$(days_until "$due")

            (( d < 0 )) && ((overdue++))
        fi

    done < "$TODO"

    notify low \
        "todod started • ${pending} pending • ${overdue} overdue"
}

cleanup_state() {

    local today
    today=$(date +%F)

    local stamp="$STATE_DIR/cleanup-$today"

    [[ -f "$stamp" ]] && return

    find "$STATE_DIR" \
        -type f \
        -mtime +90 \
        -delete 2>/dev/null

    touch "$stamp"
}

main() {

    [[ -f "$TODO" ]] || touch "$TODO"

    startup_summary

    while true; do

        cleanup_state

        check_tasks

        local hour
        hour=$(date +%H)

        if [[ "$hour" == "09" ]]; then

            local today
            today=$(date +%F)

            local stamp
            stamp="$STATE_DIR/summary-$today"

            if [[ ! -f "$stamp" ]]; then

                pending_summary

                touch "$stamp"
            fi
        fi

        sleep "$INTERVAL"

    done
}

main
