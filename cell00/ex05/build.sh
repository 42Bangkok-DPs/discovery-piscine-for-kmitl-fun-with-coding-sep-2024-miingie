if [ "$#" -eq 0 ]; then
  echo "No arguments supplied"
  exit 1
fi

rm -rf ex*

for arg in "$@"; do
  mkdir "ex${arg}"
done
