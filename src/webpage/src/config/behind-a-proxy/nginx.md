# nginx

```nginx
server {
    listen 80;
    server_name _;
    
    location / {
        proxy_pass http://localhost:5000/;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        # proxy_set_header X-Forwarded-Host $host;
        # proxy_set_header X-Forwarded-Prefix /;
        proxy_redirect off;
        proxy_buffering off;
        proxy_pass_request_headers on;
    }
}
```
