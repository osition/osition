# Running as Docker Container

::: warning
Docker is in an early phase and may contain bugs or a suboptimal solution
:::

`Dockerfile`
```dockerfile
FROM python:3.10-slim

ARG JARKLIN_SRC="https://github.com/jarklin/jarklin/releases/download/latest/jarklin.tgz"
ARG WEB_SRC="https://github.com/jarklin/jarklin-web/releases/download/latest/web-ui.tgz"
ARG FILES="/files/"
ARG PORT=5000

RUN apt-get update \
    && apt-get install -y --no-install-recommends ffmpeg wget

WORKDIR /opt/

# downloading newest versions
RUN wget "$JARKLIN_SRC" -O "jarklin.tgz"
RUN wget "$WEB_SRC" -O "web-ui.tgz"

# extract jarklin
RUN tar -xf "jarklin.tgz" -C . \
    && rm "jarklin.tgz"
# extract web-ui
RUN tar -xf "web-ui.tgz" -C "jarklin/web/web-ui/" \
    && rm "web-ui.tgz"
# install dependencies
RUN pip install -r "jarklin/requirements.txt" --disable-pip-version-check

# default port from flask
EXPOSE $PORT/tcp

WORKDIR "$FILES"

ENTRYPOINT ["/opt/jarklin/jarklin"]
CMD ["web", "run"]
```

```bash
docker build -t jarklin .
```

`.jarklin.yaml`
```yaml
web:
  server:
    host: "0.0.0.0"
    port: 5000
```

```bash
docker run -d --rm --publish 5000:5000 --mount type=bind,source="$(pwd)",target="/files/" jarklin
```

- `-d`: detach, don't block the terminal (remove this option to verify it can start. but you need another terminal to stop it)
- `--rm`: removes container after stopping
- `--publish`: connects container port to host port
- `--mount`: mounts your host directory into the container
- `jarklin`: image name
