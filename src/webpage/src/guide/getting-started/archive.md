# Getting started with the Archive

This is the direct output from the build script.

You have full control where and how you want to install Jarklin.

```bash
# download the automated build
wget https://github.com/jarklin/jarklin/releases/download/latest/jarklin.tgz
# extract the build into the current directory
tar -xf jarklin.tgz
# download newest version of the web-ui
./jarklin/jarklin download-web-ui
# create web-ui directory
mkdir -p jarklin/web/web-ui/
# extract the web-ui into the designated folder
tar -xf ./web-ui.tgz -C jarklin/web/web-ui/
```
