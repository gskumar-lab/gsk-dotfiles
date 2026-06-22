#!/bin/bash

list=~/.config/webapps.list

# Detect Brave variant
for b in brave brave-browser brave-bin brave-origin brave-origin-nightly brave-origin-beta; do
    if command -v "$b" >/dev/null 2>&1; then
        browser="$b"
        break
    fi
done

# Exit if no browser found
[ -z "$browser" ] && { echo "Brave not found"; exit 1; }

choice=$(cut -d'|' -f1 "$list" | rofi -dmenu -i -p "WebApps" \
-theme-str '
* { font: "JetBrainsMono Nerd Font 16"; }
window { width: 250px; border-radius: 12px; }
listview { fixed-height: false; }
element { padding: 8px; }
element-text { margin: 0 8px; }
scrollbar { handle-width: 0px; width: 0px; }
listview { padding: 0px; margin: 0px; }
entry { placeholder: "..."; }
')

[ -z "$choice" ] && exit

url=$(grep "^$choice|" "$list" | cut -d'|' -f2)

"$browser" --force-dark-mode --enable-features=WebUIDarkMode --blink-settings=darkMode=4 --app="$url" &
