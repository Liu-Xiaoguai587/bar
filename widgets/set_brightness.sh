
brightness=$(cat /sys/class/backlight/intel_backlight/brightness)
brightness_max=$(cat /sys/class/backlight/intel_backlight/max_brightness)
new_brightness=$(($brightness + $1))


if (( $1 > 0 )); then
    # echo "bigger then 0"
    if (( $new_brightness > $brightness_max )); then
        # echo "bigger then max"
        new_brightness=$brightness_max
    fi
else
    # echo "smaller then 0"
    if (( $new_brightness < 0 )); then
        # echo "smaller then 0"
        new_brightness=0
    fi
fi

# echo $brightness
# echo $new_brightness
echo $new_brightness > /sys/class/backlight/intel_backlight/brightness
