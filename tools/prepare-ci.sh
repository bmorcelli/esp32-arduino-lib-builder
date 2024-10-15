#!/bin/bash

sudo apt update && sudo apt install -y git wget curl libssl-dev libncurses-dev flex bison gperf python3 cmake ninja-build ccache
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py && python3 get-pip.py
sudo apt install -y python3-pip python3-setuptools python3-venv python3-serial python3-click python3-future python3-wheel python3-cryptography python3-pyparsing python3-pyelftools

#pip3 install setuptools pyserial click future wheel cryptography pyparsing pyelftools
