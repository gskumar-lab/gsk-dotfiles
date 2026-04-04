#!/bin/bash

case "$1" in
up)
    wpctl set-volume @DEFAULT_AUDIO_SINK@ 5%+
    ;;
down)
    wpctl set-volume @DEFAULT_AUDIO_SINK@ 5%-
    ;;
mute)
    wpctl set-mute @DEFAULT_AUDIO_SINK@ toggle
    ;;
esac

vol=$(wpctl get-volume @DEFAULT_AUDIO_SINK@ | awk '{print int($2*100)}')
mute=$(wpctl get-volume @DEFAULT_AUDIO_SINK@ | grep -o MUTED)

if [[ "$mute" == "MUTED" ]]; then
    notify-send "🔇 Volume Muted"
else
    notify-send "🔊 Volume $vol%"
fi
