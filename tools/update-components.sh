#/bin/bash

source ./tools/config.sh

#
# CLONE/UPDATE TINYUSB
#
echo "Updating TinyUSB..."
TINYUSB_REPO_URL="https://github.com/hathach/tinyusb.git"
TINYUSB_REPO_DIR="$AR_COMPS/arduino_tinyusb/tinyusb"
TINYUSB_BRANCH="${TINYUSB_BRANCH:-master}"
TINYUSB_COMMIT="${TINYUSB_COMMIT:-d9ad09a8d}"
if [ ! -d "$TINYUSB_REPO_DIR/.git" ]; then
    rm -rf "$TINYUSB_REPO_DIR"
    git clone --branch "$TINYUSB_BRANCH" "$TINYUSB_REPO_URL" "$TINYUSB_REPO_DIR"
else
    git -C "$TINYUSB_REPO_DIR" fetch origin "$TINYUSB_BRANCH"
fi
git -C "$TINYUSB_REPO_DIR" checkout "$TINYUSB_COMMIT"
if [ $? -ne 0 ]; then exit 1; fi
