# Config

::: info
Jarklin requires an existing configuration file in the current directory to start.
([More information](../guide/wizard/index.md#create-config))
:::

::: tip
Use the [wizard](../guide/wizard/index.md#config-generation) to create your config.
The wizard should be more than enough for the average user.
Only if you need more specialisation or optimization you should look here.
:::

> ## `web`
> 
> everything related to the web-server
> 
> > ### `web.debug`
> > 
> > ::: warning
> > debug-mode is only if you know what you are doing.
> > Better you don't touch this
> > :::
> > 
> > type: `boolean`
>
> > ### `web.baseurl`
> >
> > which baseurl to use in case you host multiple services on you device
> >
> > has to start with `/`
> >
> > eg: `/jarklin`
> > 
> > type: `string`
>
> > ### `web.server`
> > 
> > jarklin uses [waitress](https://docs.pylonsproject.org/projects/waitress/en/stable/index.html) to serve the backend.
> > All arguments are passed directly to `waitress.serve`. ([See all Arguments](https://docs.pylonsproject.org/projects/waitress/en/stable/arguments.html)) 
> >
> >  ::: warning
> >  `web.server.host`&`web.server.port`, `web.server.listen` and `web.server.unix_socket` are mutually exclusive
> >  :::
> >
> > > #### `web.server.threads`
> > > 
> > > number of threads to process requests
> > > 
> > > eg: `4`, `6`
> > >
> > > type: `integer`
> >
> > > #### `web.server.host`
> > >
> > > which network interface to bind to
> > > 
> > > ::: tip
> > > you can use `*` as a wildcard for all available interfaces
> > > :::
> > >
> > > eg: `localhost`, `127.0.0.1`, `0.0.0.0`
> > > 
> > > type: `string`
> >
> > > #### `web.server.port`
> > >
> > > which port to serve on
> > >
> > > eg: `3000`, `5000`, `5050`, `8000`, `8080`
> > > 
> > > type: `integer`
> >
> > > #### `web.server.listen`
> > > 
> > > listen on combinations of host:port arguments.
> > > Combinations should be a quoted, space-delimited list, as in the following examples.
> > > 
> > > eg: `127.0.0.1:8080 [::1]:8080`, `*:8080 *:6543`
> > >
> > > type: `string`
> >
> > > #### `web.server.unix_socket`
> > >
> > > Unix-Domain-Socket path to bind to
> > >
> > > eg: `/tmp/jarklin.sock`
> > > 
> > > type: `string`
> >
> > > #### `web.server.threads`
> > >
> > > basically the number of requests that can be concurrently processed
> > > 
> > > ::: tip
> > > Browsers send around 6 requests at once. So the value should be set a bit higher to allow multiple clients at once.
> > > :::
> > >
> > > eg: `4`, `6`
> > >
> > > type: `integer`
> 
> > ### `web.session`
> > 
> > related to [`web.auth`](#webauth) and specifies how long a session stays
> >
> > > #### `web.session.permanent`
> > > 
> > > if a session should be invalidated when the browser closes
> > >
> > > eg: `yes`, `no`
> > > 
> > > type: `boolean`
> >
> > > #### `web.session.lifetime`
> > > 
> > > how long a session is kept (in seconds) before the user has to log-in again.
> > > 
> > > ::: info
> > > note: only useful if `web.session.permanent` is enabled
> > > :::
> > > 
> > > eg: `3600` (1 hour), `86400` (1 day), `604800` (1 week), `2678400` (1 month)
> > > 
> > > type: `integer`
> > 
> > > #### `web.session.refresh_each_request`
> > > 
> > > If the [lifetime](#websessionlifetime) should be reset after each request.
> > >
> > > eg: `yes`, `no`
> > >
> > > type: `boolean`
> 
> > ### `web.auth`
> > 
> > Authentication related options. Without this, everyone can visit the website and see the content.
> > 
> > > #### `web.auth.username` / `web.auth.password`
> > > Should be pretty self-explanatory
> > > 
> > > type: `string`
> >
> > > #### `web.auth.userpass`
> > > path to an userpass file.
> > > Each line contains a `username:password` pair
> > > 
> > > type: `string` (path)
> 
> > ### `web.gzip`
> > 
> > Whether to gzip the content.
> > Reduces the response-size of text-based responses on cost of CPU-Time.
> > 
> > note: Should be done by the Proxy-Server if possible. Otherwise, this is the option.
> >
> > eg: `yes`, `no`
> > 
> > type: `boolean`
>
> > ### `web.optimize`
> > 
> > Allow media optimization.
> > Enabling this option allows for faster downloads as supported media is just-in-time optimized.
> > 
> > ::: danger
> > Only use this option for a very small user-base as it can take up lots of system-resources.
> > :::
> > 
> > ::: warning
> > video optimization is currently buggy
> > :::
> >
> > eg:
> > ```yaml
> > web:
> >   optimize:
> >     image: yes
> >     video: no
> >     video/mkv: yes
> > ```
> > 
> > type: `mapping<mimetype | mimetype/subtype, boolean>`
> 
> > ### `web.proxy_fix`
> > Tell jarklin that it's behind a Proxy.
> > If this config exists, the default-values are used.
> > 
> > keys: `x_forwarded_for`, `x_forwarded_proto`, `x_forwarded_host`, `x_forwarded_port`, `x_forwarded_prefix`
> > 
> > value: is the trusted depth
> >
> > eg:
> > ```yaml
> > web:
> >   proxy_fix:
> >     x_forwarded_for: 2  # behind two proxies
> >     #x_forwarded_proto: 0
> >     #x_forwarded_host: 0
> >     #x_forwarded_port: 0
> >     #x_forwarded_prefix: 0
> > ```
> > 
> > type: `mapping<x_forwarded_for|x_forwarded_proto|x_forwarded_host|x_forwarded_port|x_forwarded_prefix, integer>`


> ## `cache`
> Everything related to the cache-generation.
> 
> These options can be used to reduce the required amount of disc-space for the cache.
> If you don't have that problem you can just ignore these options.
> 
> > ### `cache.gallery`
> > cache configuration for galleries
> > 
> > > #### `cache.gallery.dimensions`
> > > maximum dimensions for previews
> > > 
> > > > ##### `cache.gallery.dimensions.width`
> > > > maximum width of previews
> > > >
> > > > type: `integer`
> > > 
> > > > ##### `cache.gallery.dimensions.height`
> > > > maximum height of previews
> > > >
> > > > type: `integer`
> >
> > > #### `cache.gallery.animated`
> > > > ##### `cache.gallery.animated.max_images`
> > > > maximum number of images to include into the animated preview
> > > >
> > > > type: `integer`
> > > 
> > > > ##### `cache.gallery.animated.frame_time`
> > > > duration for each image in the animated preview
> > > >
> > > > type: `float`
> 
> > ### `cache.video`
> > cache configuration for videos
> > 
> > > #### `cache.video.dimensions`
> > > maximum dimensions for previews
> > > 
> > > > ##### `cache.video.dimensions.width`
> > > > maximum width of previews
> > > >
> > > > type: `integer`
> > >
> > > > ##### `cache.video.dimensions.height`
> > > > maximum height of previews
> > > >
> > > > type: `integer`
> > 
> > > #### `cache.video.animated`
> > > configuration for the animated preview
> > > 
> > > > ##### `cache.video.animated.scene_length`
> > > > duration per scene in the animated preview
> > > > 
> > > > type: `integer`
> > > 
> > > > ##### `cache.video.fps`
> > > > frames per second for the animated preview
> > > > 
> > > > type: `integer`
> 
> > ### `cache.ignore`
> > List of pattern which specify which files or directories should be ignored
> > 
> > eg: `/private/`, `*.mkv`
> >
> > type: `list<string>`

> ## `logging`
> configure logging
>
> > ### `logging.level`
> > how detailed the logging messages should be
> > 
> > options: `DEBUG`, `INFO`, `WARNING`, `ERROR`, `CRITICAL`
> 
> > ### `logging.console`
> > whether to log to the console or not
> > 
> > eg: `yes`, `no`
> > 
> > type: `boolean`
> 
> > ### `logging.file`
> > whether to log to a file
> > 
> > ::: warning
> > logging to a file could be buggy
> > :::
> >
> > > #### `logging.file.path`
> > > location of the log-file
> > > 
> > > type: `string` (path)
> >
> > > #### `logging.file.max_bytes`
> > > maximum size of a log-file before rotating
> > > 
> > > type: `integer`
> >
> > > #### `logging.file.backup_count`
> > > number of log-files to keep
> > > 
> > > type: `integer`
