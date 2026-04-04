#!/usr/bin/env bash

THEME_DIR="$HOME/.config/mango/waybar/styles"
CURRENT_LINK="$HOME/.config/mango/waybar/style.css"

# Get list of themes
themes=($(ls "$THEME_DIR"))

# Get current theme name
current_theme=$(basename "$(readlink "$CURRENT_LINK")")

# Find next theme
next_theme=""
found=false

for theme in "${themes[@]}"; do
    if $found; then
        next_theme="$theme"
        break
    fi
    if [[ "$theme" == "$current_theme" ]]; then
        found=true
    fi
done

# If at end, loop back to first
if [[ -z "$next_theme" ]]; then
    next_theme="${themes[0]}"
fi

# Apply new theme
ln -sf "$THEME_DIR/$next_theme" "$CURRENT_LINK"

echo "Switched to theme: $next_theme"

# Reload Waybar
pkill waybar
waybar -c ~/.config/mango/waybar/config.jsonc -s ~/.config/mango/waybar/style.css &

