# 󰤮    󰤯    󰤟     󰤢     󰤥     󰤨
# none 0-10 10-25 -40 40-55 55-70
# ▁▂▃▄▅▆▇██
#
# ▂▄▆█

net_quality=$(iwconfig wlp1s0 | awk '/Link Quality/ {print $2}' | awk -F= '{print $2}')
net_quality=${net_quality%/70}

if [[ -z "$net_quality" ]]; then
    net_quality=" "
    echo " "
elif (( $net_quality > 55 )); then
    # net_quality="󰤨"
    net_quality=" ▂▄▆█"
elif (( $net_quality > 40 )); then
    net_quality=" ▂▄▆ "
elif (( $net_quality > 25)); then
    net_quality=" ▂▄  "
elif (( $net_quality > 10)); then
    net_quality=" ▂   "
else
    net_quality=" ▁   "
fi

echo $net_quality
