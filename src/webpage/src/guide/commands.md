# commands

[[TOC]]

## `jarklin run`

combination of `jarklin web run` and `jarklin cache run`

## `jarklin web run`

Start a webserver to serve the web-ui, your files and the generated cache.

## `jarklin cache run`

Start a cache generation that runs once every hour at `xx:00`.

## `jarklin cache generate`

Actively generates the cache. 

::: info
This updates only missing or outdated entries.
So use this if you want to update the cache manually.
:::

## `jarklin cache remove`

Remove the existing cache.

You could basically just delete the `.jarklin/` directory. **But** this could change any time.

## `jarklin cache regenerate`


Shorthand for `jakrlin cache remove` and `jarklin cache generate`.

::: tip
Use this to fully regenerate the cache in case you changed the cache configuration.
:::
