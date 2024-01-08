# Getting started with the Automated Build

Jarklin has an automated build that is executed and release when new changes are available.

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
