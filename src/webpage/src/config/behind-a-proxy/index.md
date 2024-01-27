# Behind a Proxy

When serving your application, it is often good or necessary to put a dedicated HTTP server in front of it.
This “reverse proxy” can handle incoming requests, TLS, and other security and performance concerns better than Jarklin.

It could also be that you are running multiple web-server on the same machine and want to offer all of them on one port.

## Example Configurations

- [nginx](./nginx)
