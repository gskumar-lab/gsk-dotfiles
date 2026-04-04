#!/usr/bin/env sh

# --- CPU (delta, minimal sleep) ---
read cpu a b c idle rest < /proc/stat
prev_total=$((a+b+c+idle))
prev_idle=$idle

sleep 0.2

read cpu a b c idle rest < /proc/stat
total=$((a+b+c+idle))
diff_total=$((total - prev_total))
diff_idle=$((idle - prev_idle))

cpu=$(( (100 * (diff_total - diff_idle)) / diff_total ))

# --- Memory ---
while read key value unit; do
  case "$key" in
    MemTotal:) total_mem=$value ;;
    MemAvailable:) avail_mem=$value ;;
  esac
done < /proc/meminfo

used_mem=$((total_mem - avail_mem))
mem=$((used_mem * 100 / total_mem))

# --- Temp ---
if [ -f /sys/class/thermal/thermal_zone0/temp ]; then
  temp=$(($(cat /sys/class/thermal/thermal_zone0/temp) / 1000))
  temp="${temp}°C"
else
  temp="N/A"
fi

echo "  ${mem}% |  ${cpu}% |  ${temp}"
