# un-terraform-backend

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAkaraChen%2Fun-terraform-backend&env=UPSTASH_REDIS_REST_URL,UPSTASH_REDIS_REST_TOKEN&project-name=unterraform&repository-name=unterraform) [![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/akarachen/un-terraform-backend/tree/main) [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/akarachen/un-terraform-backend#NITRO_PRESET=netlify&NITRO_COMPATIBILITY_DATE=2025-02-03&TF_HTTP_ADDRESS=http://localhost&TF_HTTP_UPDATE_METHOD=POST&TF_HTTP_LOCK_ADDRESS=http://localhost/lock&TF_HTTP_LOCK_METHOD=POST&TF_HTTP_UNLOCK_ADDRESS=http://localhost/unlock&TF_HTTP_UNLOCK_METHOD=POST&UPSTASH_REDIS_REST_URL=&UPSTASH_REDIS_REST_TOKEN=&DRIVER=upstash)

Run terraform backend any where, with minimium code modification (mostly no need to modify).

## Features

1. Run terraform backend at JavaScript runtime, at any edge or server.
2. Storage state with any storage driver, or you can just store state in memory.
3. Support all http backend features, including lock, basic auth, custom method, etc.

## Supported platform

### Environment

- Node.js
- Bun
- Deno
- Netlify Functions
- Digital Ocean
- Vercel functions
- More to come

### object storage

- Cloudflare KV/R2
- Netlify Blobs
- Redis
- Vercel KV/Blob
- More to come

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

### Netlify + Upstash

```bash
NITRO_PRESET=netlify
NITRO_COMPATIBILITY_DATE=2025-02-03
TF_HTTP_ADDRESS=https://<yourhost>:3000
TF_HTTP_UPDATE_METHOD=POST
TF_HTTP_LOCK_ADDRESS=https://<yourhost>/lock
TF_HTTP_LOCK_METHOD=POST
TF_HTTP_UNLOCK_ADDRESS=https://<yourhost>/unlock
TF_HTTP_UNLOCK_METHOD=POST
TF_HTTP_USERNAME=username
TF_HTTP_PASSWORD=password
DRIVER=upstash
UPSTASH_REDIS_REST_URL=<yoururl>
UPSTASH_REDIS_REST_TOKEN=<yourtoken>
```

And run:

```shell
pnpm build
netlify functions:serve dist
```
