# Getting Started?

::: warning
Currently there exists nothing. So you won't really be getting any results.
:::

::: warning
Jarklin is designed to run unter linux (ubuntu).
It may work on other systems but the Guide is for linux.
:::

[[TOC]]

<!---

## From Docker

::: info
Not available yet
:::

## From Package

::: info
Not available yet
:::

[Download the Package](https://github.com/jarklin/jarklin-server/releases/download/latest/jarklin-server.deb)

--->

## From Automated Build

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
