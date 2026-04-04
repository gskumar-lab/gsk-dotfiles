#!/usr/bin/env bash
set -euo pipefail

# =========================
# CONFIG
# =========================
CONFIG="$HOME/.todo/config"

if [[ -f "$CONFIG" ]]; then
    if ! source "$CONFIG"; then
        echo "Failed to load config: $CONFIG"
        exit 1
    fi
fi

SCRIPT="${SCRIPT:-$HOME/.config/scripts/todo-reminder.sh}"
LOG_DIR="${LOG_DIR:-$HOME/.todo}"
LOG="$LOG_DIR/daemon.log"
LOCK="$LOG_DIR/daemon.lock"
PID_FILE="$LOG_DIR/daemon.pid"

INTERVAL="${INTERVAL:-3600}"
MAX_LOG_SIZE="${MAX_LOG_SIZE:-1048576}"
MAX_BACKOFF="${MAX_BACKOFF:-86400}" # 24h max

mkdir -p "$LOG_DIR"

# =========================
# UTILITIES
# =========================

get_size() {
    stat -c%s "$1" 2>/dev/null || stat -f%z "$1"
}

rotate_log() {
    if [[ -f "$LOG" && $(get_size "$LOG") -gt "$MAX_LOG_SIZE" ]]; then
        mv "$LOG" "$LOG.$(date +%s)"
        touch "$LOG"
    fi
}

log() {
    local msg="[$(date '+%F %T')] $*"
    echo "$msg" >> "$LOG"
}

# =========================
# LOCKING
# =========================
exec 200>"$LOCK"

if ! flock -n 200; then
    echo "Daemon already running"
    exit 1
fi

echo $$ > "$PID_FILE"

# =========================
# VALIDATION
# =========================
if [[ ! -f "$SCRIPT" ]]; then
    log "ERROR: Script not found: $SCRIPT"
    exit 1
fi

if [[ ! -x "$SCRIPT" ]]; then
    log "ERROR: Script not executable: $SCRIPT"
    exit 1
fi

# =========================
# CLEANUP
# =========================
cleanup() {
    log "Todo daemon stopped"
    rm -f "$LOCK" "$PID_FILE"
    exit 0
}

trap cleanup SIGINT SIGTERM

# =========================
# START
# =========================
log "Todo daemon started (interval=${INTERVAL}s)"

fail_count=0

while true; do
    rotate_log

    start=$(date +%s)

    if "$SCRIPT" >> "$LOG" 2>&1; then
        fail_count=0
    else
        log "ERROR: reminder script failed"
        ((fail_count++))
    fi

    end=$(date +%s)
    elapsed=$((end - start))

    sleep_time=$((INTERVAL - elapsed))
    (( sleep_time < 0 )) && sleep_time=0

    # Exponential backoff (on repeated failures)
    if (( fail_count > 3 )); then
        backoff=$((INTERVAL * fail_count))
        (( backoff > MAX_BACKOFF )) && backoff=$MAX_BACKOFF
        log "Backoff सक्रिय: sleeping ${backoff}s due to repeated failures"
        sleep_time=$backoff
    fi

    sleep "$sleep_time"
done
