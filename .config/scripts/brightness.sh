#!/bin/bash

case "$1" in
up)
    brightnessctl set +5%
    ;;
down)
    brightnessctl set 5%-
    ;;
esac

brightness=$(brightnessctl -m | cut -d',' -f4 | tr -d '%')

notify-send "☀ Brightness $brightness%"
