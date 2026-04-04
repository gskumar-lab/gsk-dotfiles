#!/bin/bash

WALLDIR="$HOME/.config/backgrounds/"
INTERVAL=1800   # seconds (30 minutes)

while true; do
    pkill swaybg
    swaybg -i "$(find "$WALLDIR" -type f | shuf -n 1)" -m fill &
    sleep $INTERVAL
done
