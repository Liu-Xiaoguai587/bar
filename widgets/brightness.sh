brightness=$(cat /sys/class/backlight/intel_backlight/brightness)
brightness_max=$(cat /sys/class/backlight/intel_backlight/max_brightness)

echo " $(($brightness*100/$brightness_max))"
