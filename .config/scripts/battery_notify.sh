#!/bin/bash

# ======================================
# Linux Battery Notification Script
# Efficient version (udev + slow polling)
# ======================================

# Detect battery automatically
BAT=$(ls /sys/class/power_supply/ | grep -E '^BAT|battery' | head -n1)

# Detect AC adapter automatically
AC=$(ls /sys/class/power_supply/ | grep -E '^AC|ADP|ACAD' | head -n1)

BAT_PATH="/sys/class/power_supply/$BAT"
AC_PATH="/sys/class/power_supply/$AC"

# Some systems use different names:
# BAT0, BAT1, battery
# AC, ACAD, ADP1
# Check using:
# ls /sys/class/power_supply/

notify() {
    notify-send "$1" "$2"
}

critical() {
    notify-send -u critical "$1" "$2"
}

# -----------------------------
# Charger connect/disconnect monitor
# -----------------------------
monitor_charger() {

    last=$(cat "$AC_PATH/online")

    udevadm monitor --udev --subsystem-match=power_supply | while read -r line; do
        current=$(cat "$AC_PATH/online")

        if [[ "$current" != "$last" ]]; then
            if [[ "$current" == "1" ]]; then
                notify "󰂄 Charger Connected" ""
            else
                notify "󱟤 Charger Disconnected" "Running on battery"
            fi
            last=$current
        fi
    done
}

# -----------------------------
# Battery level monitor
# -----------------------------
monitor_battery() {

    warn30=0
    warn20=0
    warn10=0
    warn5=0
    warn90=0
    warn100=0

    while true; do

        cap=$(cat "$BAT_PATH/capacity")

        # Discharging alerts
        if (( cap <= 30 )) && (( warn30 == 0 )); then
            notify "󰁼 Battery 30%" "Consider plugging charger"
            warn30=1
        fi

        if (( cap <= 20 )) && (( warn20 == 0 )); then
            critical "󰁻 Battery 20%" "Low battery"
            warn20=1
        fi

        if (( cap <= 10 )) && (( warn10 == 0 )); then
            critical "󰂃 Battery 10%" "Very low battery"
            warn10=1
        fi

        if (( cap <= 5 )) && (( warn5 == 0 )); then
            critical "󰂎 Battery 5%" "Plug charger immediately"
            warn5=1
        fi

        # Charging alerts
        if (( cap >= 90 )) && (( warn90 == 0 )); then
            notify "󰂂 Battery 90%" "Almost full"
            warn90=1
        fi

        if (( cap >= 100 )) && (( warn100 == 0 )); then
            notify "󱟢 Battery Full" ""
            warn100=1
        fi

        # Reset triggers
        if (( cap > 30 )); then warn30=0; fi
        if (( cap > 20 )); then warn20=0; fi
        if (( cap > 10 )); then warn10=0; fi
        if (( cap > 5 )); then warn5=0; fi
        if (( cap < 90 )); then warn90=0; fi
        if (( cap < 100 )); then warn100=0; fi

        sleep 60
    done
}

# Run both monitors
monitor_charger &
monitor_battery

wait
