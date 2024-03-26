# How does Jarklin work?

Jarklin consists of three parts:

## Cache

The cache generator analyzes your media and generates previews.
These are then saved in your file-system.
That way they don't have to be re-computed during each visit.
This allows Jarklin to be able to serve thousands of clients on almost every system.

<small>(See [File-Structure](file-structure.md) for more information about the cache)</small>

## Web-Server

The server is used to serve your media, the cache data, do JIT-Optimization (if enabled) and manage the authentication of users.

## Web-Interface

This part of Jarklin runs on the client in the browser and offers an interface to navigate and view your media.
