#!/usr/bin/env bash
set -euo pipefail

# =========================
# CONFIG
# =========================
PREVIEW_LINES="${PREVIEW_LINES:-99}"

# =========================
# DEP CHECK
# =========================
for cmd in cliphist fzf wl-copy; do
    command -v "$cmd" >/dev/null 2>&1 || {
        echo "Error: $cmd not found"
        exit 1
    }
done

# =========================
# MAIN
# =========================

selection=$(
    cliphist list | fzf \
        --prompt="Clipboard History > " \
        --height=80% \
        --layout=reverse \
        --border \
        --preview="printf '%s' {} | cliphist decode 2>/dev/null | head -n $PREVIEW_LINES" \
        --preview-window=right:60% \
        --bind "ctrl-d:execute-silent(printf '%s' {} | cliphist delete)+reload(cliphist list)" \
        --bind "ctrl-x:execute-silent(cliphist wipe)+reload(sh -c 'cliphist list || true')" \
        --bind "ctrl-y:execute-silent(printf '%s' {} | cliphist decode | wl-copy --trim-newline)" \
        --bind "enter:execute-silent(printf '%s' {} | cliphist decode | wl-copy --trim-newline)+abort" \
        --header=$'ENTER: copy & exit | CTRL-Y: copy\nCTRL-D: delete | CTRL-X: wipe history'
)

# Exit if nothing selected
[ -z "${selection:-}" ] && exit 0

# Fallback copy (for selection without ENTER binding)
printf '%s' "$selection" | cliphist decode | wl-copy --trim-newline
