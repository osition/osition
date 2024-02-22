# wizard

The Wizard can either be started from the source

```bash
curl -s https://raw.githubusercontent.com/jarklin/jarklin/main/scripts/wizard.sh | bash
```

or via the delivered version after the installation

```bash
/path/to/destination/jarklin/wizard
```

After the launch, you get a terminal-based interactive UI for a convenient usage

![wizard-home](assets/initial-menu.png)

## install

This installs the newest version of Jarklin.
(Can also be used to update the existing version)

## update

::: info
currently not available yet
:::

## uninstall

As the name suggests this can be used to cleanly remove the installed version of Jarklin. 

## create-config

In order to serve a directory you need to create a configuration file the directory you want to server.
Without an existing configuration file Jarklin refuses to start.
This was made to ensure you serve the correct directory.

The filename is either `.jarklin.yaml` or `.jarklin/config.yaml`.

> `.yaml` is the recommended file-format but `.json` or `.jsonc`
> is also supported in case you are more familiar with that format or prefer it for different reasons.

The Wizard offers a convenient dialog to generate such a config file.

See [Configuration](../../config/jarklin.md) for more advanced options.
