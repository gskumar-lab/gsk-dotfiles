#!/usr/bin/env bash

STATE="$HOME/.config/mango/waybar/clock_state"

if [ -f "$STATE" ]; then
    rm "$STATE"
else
    touch "$STATE"
fi

pkill -SIGRTMIN+8 waybar
