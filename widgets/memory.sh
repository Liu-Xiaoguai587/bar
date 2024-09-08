free_command=$(free -h | tail -n 2 | head -n 1)

memory_total=$(echo "$free_command" | awk '{print $2}')
memory_used=$(echo "$free_command" | awk '{print $3}')

# echo " $memory_used/$memory_total"
echo " $memory_used/$memory_total"
