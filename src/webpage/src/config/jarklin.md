# Config

> ## `web`
> 
> everything related to the web-server
> 
> > ### `web.host`
> > 
> > which network interface to bind to
> > 
> > eg: `localhost`, `127.0.0.1`, `0.0.0.0`
> 
> > ### `web.port`
> > 
> > which port to serve on
> > 
> > eg: `3000`, `5000`, `5050`, `8000`, `8080`
> 
> > ### `web.debug`
> > 
> > ::: warning
> > debug-mode is only if you know what you are doing.
> > Better you don't touch this
> > :::
> 
> > ### `web.baseurl`
> > 
> > which baseurl to use in case you host multiple services on you device
> > 
> > has to start with `/`
> > 
> > eg: `/jarklin`
> 
> > ### `web.session`
> > 
> > related to [`web.auth`](#webauth) and specifies how long a session stays
> >
> > > #### `web.session.permanent`
> > > 
> > > if a session should be invalidated when the browser closes
> > > 
> > > eg: `true`, `false`
> >
> > > #### `web.session.lifetime`
> > > 
> > > how long a session is kept before the user has to log-in again.
> > > 
> > > note: only if `web.session.permanent` is enabled
> > > 
> > > eg: `3600` (1 hour), `86400` (1 day), `604800` (1 week), `2678400` (1 month)
> > 
> > > #### `web.session.refresh_each_request`
> > > 
> > > If the [lifetime](#websessionlifetime) should be reset after each request.
> 
> > ### `web.auth`
> > 
> > Authentication related options. Without this, everyone can visit the website and see the content.
> > 
> > > #### `web.auth.username` / `web.auth.password`
> > > Should be pretty self-explanatory
> 
> > ### `web.gzip`
> > Whether to gzip the content.
> > Reduces the response-size of text-based responses on cost of CPU-Time.
> > 
> > note: Should be done by the Proxy-Server if possible. Otherwise, this is the option.
> >
> > eg: `yes`, `no`
> 
> > ### `web.proxy_fix`
> > Tell jarklin that it's behind a Proxy.
> > If this config exists, the default-values are used.
> > 
> > keys: `x_forwarded_for`, `x_forwarded_proto`, `x_forwarded_host`, `x_forwarded_port`, `x_forwarded_prefix`
> > 
> > value: is the trusted depth
> >
> > eg: `web.proxy_fix.x_forwarded_for: 2`  (behind two proxies)


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
> > > 
> > > > ##### `cache.gallery.dimensions.height`
> > > > maximum height of previews
> >
> > > #### `cache.gallery.animated`
> > > > ##### `cache.gallery.animated.max_images`
> > > > maximum number of images to include into the animated preview
> > > 
> > > > ##### `cache.gallery.animated.frame_time`
> > > > duration for each image in the animated preview
> 
> > ### `cache.video`
> > cache configuration for videos
> > 
> > > #### `cache.video.dimensions`
> > > maximum dimensions for previews
> > > 
> > > > ##### `cache.video.dimensions.width`
> > > > maximum width of previews
> > >
> > > > ##### `cache.video.dimensions.height`
> > > > maximum height of previews
> > 
> > > #### `cache.video.animated`
> > > configuration for the animated preview
> > > 
> > > > ##### `cache.video.animated.scene_length`
> > > > duration per scene in the animated preview
> > > 
> > > > ##### `cache.video.fps`
> > > > frames per second for the animated preview
> 
> > ### `cache.ignore`
> > List of pattern which specify which files or directories should be ignored
> > 
> > eg: `/private/`, `*.mkv`
