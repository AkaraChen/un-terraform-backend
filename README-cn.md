# un-terraform-backend

在任何地方运行 Terraform 后端，几乎无需代码修改（大多数情况下）。

## 功能

1. 在 JavaScript 运行时运行 Terraform 后端，可以在任何边缘或服务器上运行。
2. 使用任何存储驱动存储状态，或者您可以仅在内存中存储状态。
3. 支持所有 HTTP 后端功能，包括锁定、基本身份验证、自定义方法等。

## 支持的平台

### js 运行时

- Node.js
- Bun
- Deno
- Cloudflare Worker
- Vercel Edge Function

查看所有支持的平台：[Nitro Docs](https://nitro.build/deploy)。

### 对象存储

- Cloudflare KV/R2
- Netlify Blobs
- Redis
- Vercel KV/Blob

## 安装

### Docker（推荐）

创建一个 `.env` 文件，内容如下：

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

然后运行：

```bash
docker compose up
```
