
#Change monitor as per your system

MONITOR=eDP-1

swayidle -w \
      timeout 30 'brightnessctl s 10%-' \
      	resume 'brightnessctl s +10%' \
      timeout 60 'mmsg -d disable_monitor,$MONITOR' \
      	resume 'mmsg -d enable_monitor,$MONITOR' \
      timeout 120 'swaylock -f -c 1e1e2e' \
      before-sleep 'swaylock -f -c 1e1e2e' \
      timeout 900 'systemctl suspend'
