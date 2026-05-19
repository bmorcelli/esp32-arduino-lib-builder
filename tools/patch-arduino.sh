#/bin/bash

source ./tools/config.sh

ARDUINO_CMAKE="$AR_COMPS/arduino/CMakeLists.txt"

if [ ! -f "$ARDUINO_CMAKE" ]; then
    echo "ERROR: Arduino CMakeLists.txt not found: $ARDUINO_CMAKE"
    exit 1
fi

if ! grep -q 'list(REMOVE_ITEM ARDUINO_ALL_LIBRARIES RainMaker)' "$ARDUINO_CMAKE"; then
    python3 - "$ARDUINO_CMAKE" <<'PY'
from pathlib import Path
import sys

path = Path(sys.argv[1])
text = path.read_text()
needle = "set(ARDUINO_LIBRARIES_SRCS)\n"
patch = (
    'if(IDF_TARGET STREQUAL "esp32p4")\n'
    '  list(REMOVE_ITEM ARDUINO_ALL_LIBRARIES RainMaker)\n'
    'endif()\n\n'
)
if needle not in text:
    raise SystemExit(f"Could not find insertion point in {path}")
path.write_text(text.replace(needle, patch + needle, 1))
PY
fi
