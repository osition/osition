# Getting started with the Archive

The Archive is meant for you to have full control where and how you want to install Jarklin.

Jarklin offers two versions of archives.
- `jarklin.tgz`: contains only the build of Jarklin.
- `jarklin.bundled.tgz`: contains the build and the web-ui files.

## `jarklin.bundled.tgz`

This is the common and recommended version as dependencies are already included

```bash
# download the automated build
wget https://github.com/jarklin/jarklin/releases/download/latest/jarklin.bundled.tgz
# extract the build into the current directory
tar -xf jarklin.bundled.tgz
# run it to verify it
./jarklin/jarklin --version
v0.0.0
# cleanup
rm ./jarklin.bundled.tgz ./web-ui.tgz
```

## `jarklin.tgz`

This version is useful if you have a different version for the web-ui

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
./jarklin/jarklin download-web-ui --dest ./web-ui.tgz
# extract the web-ui into the designated folder
tar -xf ./web-ui.tgz -C jarklin/web/web-ui/
# cleanup
rm ./jarklin.tgz ./web-ui.tgz
```
