#!/usr/bin/bash
# 1-20 21-40 41-60 61-80 81-100
# battery / 20 
battery=$(cat /sys/class/power_supply/BAT0/capacity)
icon=('' '' '' '' '')
current_battery_icon=$((($battery+19)/20))

echo "${icon[($current_battery_icon-1)]} $battery"



