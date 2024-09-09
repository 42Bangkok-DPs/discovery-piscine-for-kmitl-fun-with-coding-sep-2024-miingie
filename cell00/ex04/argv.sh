for arg in "$1" "$2" "$3"; do
  if [ -n "$arg" ]; then
    echo "$arg"
  fi
done