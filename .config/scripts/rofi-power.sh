#!/usr/bin/env bash

# --- Commands (edit if needed) ---
LOCK="swaylock -c 1e1e2e"
LOGOUT="mmsg -q"
SLEEP="systemctl suspend"
RESTART="systemctl reboot"
SHUTDOWN="systemctl poweroff"

# --- Options with icons ---
options="  Lock
󰍃  Logout
󰤄  Sleep
  Restart
  Shutdown"

chosen=$(echo -e "$options" | rofi -dmenu \
    -i \
    -p "⏻"  \
    -theme-str '
* { font: "JetBrainsMono Nerd Font Propo 16"; }
window { width: 250px; border-radius: 12px; }
listview { fixed-height: false; }
element { padding: 8px; }
element-text { margin: 0 8px; }
scrollbar { handle-width: 0px; width: 0px; }
listview { padding: 0px; margin: 0px; }
entry { placeholder: "Search..."; }
')

case "$chosen" in
    *Lock) $LOCK ;;
    *Logout) $LOGOUT ;;
    *Sleep) $SLEEP ;;
    *Restart) $RESTART ;;
    *Shutdown) $SHUTDOWN ;;
esac
