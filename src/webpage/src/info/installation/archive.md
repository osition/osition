# Getting started with the Archive

The Archive is meant for you to have full control where and how you want to install Jarklin.

## Installation

```bash
# download the automated build
wget https://github.com/jarklin/jarklin/releases/download/latest/jarklin.tgz
# extract the build into the current directory
tar -xf jarklin.tgz
# run it to verify it
./jarklin/jarklin --version
v0.0.0
# ensure the web-ui directory exists
mkdir -p jarklin/web/web-ui/
# download newest version of the web-ui
wget https://github.com/jarklin/jarklin-web/releases/download/latest/web-ui.tgz
# extract the web-ui into the designated folder
tar -xf ./web-ui.tgz -C jarklin/web/web-ui/
# cleanup
rm ./jarklin.tgz ./web-ui.tgz
```

In the extracted directory should be a `requirements.txt` file.
This is the same that `pip3` requires.
It's up to you if you want to install these in the system, create a virtual-environment or install them into `jarklin/_deps/` like the installer does.

The recommended method is to install them into `jarklin/_deps/`
```bash
mkdir -p "jarklin/_deps/"
python3 -m pip install -r "jarklin/requirements.txt" -t "jarklin/_deps/" --disable-pip-version-check
```
