import { createStorage as unstorage } from 'unstorage'
import { config } from '~~/config/config'

const getDriver = async () => {
    switch (config.DRIVER) {
        case 'fs': {
            const fs = await import('unstorage/drivers/fs')
            return fs.default({
                base: config.DRIVER_FS_BASE,
            })
        }
        case 'azure-app-configuration': {
            const appConfig = await import(
                'unstorage/drivers/azure-app-configuration'
            )
            return appConfig.default({
                appConfigName:
                    config.DRIVER_AZURE_APP_CONFIGURATION_CONFIG_NAME,
                label: config.DRIVER_AZURE_APP_CONFIGURATION_LABEL,
                prefix: config.DRIVER_AZURE_APP_CONFIGURATION_PREFIX,
            })
        }
        case 'azure-key-vault': {
            const keyVault = await import('unstorage/drivers/azure-key-vault')
            return keyVault.default({
                vaultName: config.DRIVER_AZURE_KEY_VAULT_NAME,
            })
        }
        case 'azure-storage-blob': {
            const blob = await import('unstorage/drivers/azure-storage-blob')
            return blob.default({
                accountName: config.DRIVER_AZURE_STORAGE_BLOB_ACCOUNT_NAME,
            })
        }
        case 'cloudflare-kv-http': {
            const kv = await import('unstorage/drivers/cloudflare-kv-http')
            return kv.default({
                accountId: config.DRIVER_CLOUDFLARE_ACCOUNT_ID,
                namespaceId: config.DRIVER_CLOUDFLARE_KV_NAMESPACE_ID,
                apiToken: config.DRIVER_CLOUDFLARE_API_TOKEN,
            })
        }
        case 'deno-kv': {
            const denoKV = await import('unstorage/drivers/deno-kv')
            return denoKV.default({
                path: config.DRIVER_DENO_KV_PATH,
                base: config.DRIVER_DENO_KV_PREFIX,
            })
        }
        case 'netlify-blob': {
            const blob = await import('unstorage/drivers/netlify-blobs')
            return blob.default({
                name: config.DRIVER_NETLIFY_BLOB_NAME,
            })
        }
        case 'redis': {
            const redis = await import('unstorage/drivers/redis')
            return redis.default({
                base: config.DRIVER_REDIS_PREFIX,
                host: config.DRIVER_REDIS_HOST,
                tls: Boolean(config.DRIVER_REDIS_TLS) as any,
                port: parseInt(config.DRIVER_REDIS_PORT),
                username: config.DRIVER_REDIS_USERNAME,
                password: config.DRIVER_REDIS_PASSWORD,
            })
        }
        case 'uploadthing': {
            const uploadthing = await import('unstorage/drivers/uploadthing')
            return uploadthing.default({})
        }
        case 'upstash': {
            const upstash = await import('unstorage/drivers/upstash')
            return upstash.default({
                base: config.DRIVER_UPSTASH_PREFIX,
            })
        }
        case 'vercel-kv': {
            const vercel = await import('unstorage/drivers/vercel-kv')
            return vercel.default({})
        }
    }
}

export const createStorage = async () => {
    const storage = unstorage({
        driver: await getDriver(),
    })
    return storage
}
