#!/bin/bash

list=~/.config/webapps.list

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

brave --app="$url" &
