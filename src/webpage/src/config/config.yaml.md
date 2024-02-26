# Simple example

```yaml
web:
  server:
    port: 9898
  gzip: yes
  optimize: yes
  auth:
    username: "user"
    password: "pass"
cache:
  ignore:
#    - "/hidden"
logging:
  level: WARNING
```

# Advanced Example

```yaml
web:
  baseurl: "/"
  server:
    host: "0.0.0.0"
    port: 9898
    threads: 4
  gzip: yes
  optimize: yes
  session:
    permanent: yes
    lifetime: 3600  # 1h
    refresh_each_request: yes
  auth:
    username: "user"
    password: "pass"
    userpass: ".jarklin/userpass.txt"
cache:
  gallery:
    dimensions:  # 1000x1000
      width: 1000
      height: 1000
    animated:
      max_images: 10
      frame_time: 2.0  # 2s
  video:
    dimensions:  # 1000x1000
      width: 1000
      height: 1000
    animated:
      scene_length: 2.0  # 2s
      fps: 5
  ignore:
    - "/*"
    - "!/allowed"
logging:
  level: WARNING
  console: yes
```
