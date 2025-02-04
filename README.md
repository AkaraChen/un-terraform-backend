# un-terraform-backend

[简体中文](README-cn.md)

Run terraform backend any where, with minimium code modification (mostly no need to modify).

## Features

1. Run terraform backend at JavaScript runtime, at any edge or server.
2. Storage state with any storage driver, or you can just store state in memory.
3. Support all http backend features, including lock, basic auth, custom method, etc.

## Supported platform

### js runtime

- Node.js
- Bun
- Deno
- Cloudflare Worker
- Vercel Edge Function

See all supported platform at [Nitro Docs](https://nitro.build/deploy).

### object storage

- Cloudflare KV/R2
- Netlify Blobs
- Redis
- S3
- Vercel KV/Blob

## Installation

### Docker (recommended)

Create a `.env` file with the following content:

```bash
NITRO_PRESET=node-server
NITRO_COMPATIBILITY_DATE=2025-02-03
TF_HTTP_ADDRESS=https://<yourhost>:3000
TF_HTTP_UPDATE_METHOD=POST
TF_HTTP_LOCK_ADDRESS=https://<yourhost>:3000/lock
TF_HTTP_LOCK_METHOD=POST
TF_HTTP_UNLOCK_ADDRESS=https://<yourhost>:3000/unlock
TF_HTTP_UNLOCK_METHOD=POST
TF_HTTP_USERNAME=username
TF_HTTP_PASSWORD=password
DRIVER=fs
DRIVER_FS_BASE=/var/unterraform/
```

And run:

```bash
docker compose up
```

### Cloudflare Workers + Upstash
