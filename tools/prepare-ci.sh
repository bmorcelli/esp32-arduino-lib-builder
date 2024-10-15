#!/bin/bash

# sudo apt update && sudo apt install -y git wget curl libssl-dev libncurses-dev flex bison gperf python3 cmake ninja-build ccache
# curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py && python3 get-pip.py && \
# pip3 install setuptools pyserial click future wheel cryptography pyparsing pyelftools

#!/bin/bash

# Atualiza e instala os pacotes necessários
sudo apt update && sudo apt install -y git wget curl libssl-dev libncurses-dev flex bison gperf python3 python3-venv cmake ninja-build ccache

# Cria um ambiente virtual
python3 -m venv myenv

# Ativa o ambiente virtual
source myenv/bin/activate

# Instala o pip se não estiver disponível
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py && python3 get-pip.py

# Instala os pacotes Python necessários
pip install setuptools pyserial click future wheel cryptography pyparsing pyelftools
