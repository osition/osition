# File-Structure

```yaml
.jarklin.yaml  # (contains your configuration. required to start jarklin)
.jarklin/  # (contains everything jarklin related. delete this during a cleanup)
├─ config.yaml  # (if not /.jarklin.yaml)
├─ media.json  # (contains an index of your media)
├─ problems.yaml  # (contains media that could not be processed)
├─ logs/  # (optional)
│  ├─ jarklin.log
│  ├─ jarklin.log.1
├─ cache/  # (contains metadata and previews for your media)
│  ├─ your/files/
│  │  ├─ video.mp4/
│  │  ├─ gallery/
your/
├─ files/
│  ├─ gallery/
│  │  ├─ 1.jpg
│  │  ├─ 2.png
│  ├─ video.mp4
```
