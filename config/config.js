'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.config = void 0
require('dotenv/config')
var zod_1 = require('zod')
var consts_1 = require('./consts')
var driverUnionSchema = zod_1.z.discriminatedUnion('DRIVER', [
    zod_1.z.object({
        DRIVER: zod_1.z.literal('fs'),
        DRIVER_FS_BASE: zod_1.z.string().refine(function (s) {
            return !s.startsWith('.')
        }),
    }),
    zod_1.z.object({
        DRIVER: zod_1.z.literal('azure-app-configuration'),
        AZURE_TENANT_ID: zod_1.z.string().min(1),
        AZURE_CLIENT_ID: zod_1.z.string().min(1),
        AZURE_CLIENT_SECRET: zod_1.z.string().min(1),
        DRIVER_AZURE_APP_CONFIGURATION_CONFIG_NAME: zod_1.z.string(),
        DRIVER_AZURE_APP_CONFIGURATION_LABEL: zod_1.z.string(),
        DRIVER_AZURE_APP_CONFIGURATION_PREFIX: zod_1.z.string(),
    }),
    zod_1.z.object({
        DRIVER: zod_1.z.literal('azure-key-vault'),
        AZURE_TENANT_ID: zod_1.z.string().min(1),
        AZURE_CLIENT_ID: zod_1.z.string().min(1),
        AZURE_CLIENT_SECRET: zod_1.z.string().min(1),
        DRIVER_AZURE_KEY_VAULT_NAME: zod_1.z.string(),
    }),
    zod_1.z.object({
        DRIVER: zod_1.z.literal('azure-storage-blob'),
        AZURE_TENANT_ID: zod_1.z.string().min(1),
        AZURE_CLIENT_ID: zod_1.z.string().min(1),
        AZURE_CLIENT_SECRET: zod_1.z.string().min(1),
        DRIVER_AZURE_STORAGE_BLOB_ACCOUNT_NAME: zod_1.z.string(),
    }),
    zod_1.z.object({
        DRIVER: zod_1.z.literal('cloudflare-kv-binding'),
        DRIVER_CLOUDFLARE_KV_BINDING_NAME: zod_1.z.string(),
        DRIVER_CLOUDFLARE_KV_BINDING_PREFIX: zod_1.z.string(),
    }),
    zod_1.z.object({
        DRIVER: zod_1.z.literal('cloudflare-kv-http'),
        DRIVER_CLOUDFLARE_API_TOKEN: zod_1.z.string(),
        DRIVER_CLOUDFLARE_ACCOUNT_ID: zod_1.z.string(),
        DRIVER_CLOUDFLARE_KV_NAMESPACE_ID: zod_1.z.string(),
    }),
    zod_1.z.object({
        DRIVER: zod_1.z.literal('cloudflare-r2-binding'),
        DRIVER_CLOUDFLARE_R2_BINDING_NAME: zod_1.z.string(),
    }),
    zod_1.z.object({
        DRIVER: zod_1.z.literal('deno-kv'),
        DRIVER_DENO_KV_PATH: zod_1.z.string(),
        DRIVER_DENO_KV_PREFIX: zod_1.z.string(),
    }),
    zod_1.z.object({
        DRIVER: zod_1.z.literal('netlify-blob'),
        DRIVER_NETLIFY_BLOB_NAME: zod_1.z.string(),
    }),
    zod_1.z.object({
        DRIVER: zod_1.z.literal('redis'),
        DRIVER_REDIS_PREFIX: zod_1.z.string(),
        DRIVER_REDIS_HOST: zod_1.z.string(),
        DRIVER_REDIS_TLS: zod_1.z.string(),
        DRIVER_REDIS_PORT: zod_1.z
            .string()
            .regex(/^\d+$/)
            .refine(function (a) {
                return parseInt(a) > 0 && parseInt(a) <= 65535
            }),
        DRIVER_REDIS_USERNAME: zod_1.z.string(),
        DRIVER_REDIS_PASSWORD: zod_1.z.string(),
    }),
    zod_1.z.object({
        DRIVER: zod_1.z.literal('s3'),
        DRIVER_S3_BUCKET: zod_1.z.string(),
        DRIVER_S3_ENDPOINT: zod_1.z.string(),
        DRIVER_S3_ACCESS_KEY_ID: zod_1.z.string(),
        DRIVER_S3_SECRET_ACCESS_KEY: zod_1.z.string(),
        DRIVER_S3_REGION: zod_1.z.string(),
    }),
    zod_1.z.object({
        DRIVER: zod_1.z.literal('uploadthing'),
        UPLOADTHING_SECRET: zod_1.z.string(),
    }),
    zod_1.z.object({
        DRIVER: zod_1.z.literal('upstash'),
        DRIVER_UPSTASH_PREFIX: zod_1.z.string().default('unterraform/'),
    }),
    zod_1.z.object({
        DRIVER: zod_1.z.literal('vercel-kv'),
        KV_REST_API_URL: zod_1.z.string(),
        KV_REST_API_TOKEN: zod_1.z.string(),
        DRIVER_VERCEL_KV_PREFIX: zod_1.z.string(),
    }),
])
var configSchema = zod_1.z.intersection(
    zod_1.z.object({
        NITRO_PRESET: consts_1.nitroPresetSchema.default('node'),
        NITRO_COMPATIBILITY_DATE: zod_1.z.string().min(1).optional(),
        TF_HTTP_ADDRESS: zod_1.z.string().url(),
        TF_HTTP_UPDATE_METHOD: consts_1.HttpMethodSchema.default('POST'),
        TF_HTTP_LOCK_ADDRESS: zod_1.z.string().url(),
        TF_HTTP_LOCK_METHOD: consts_1.HttpMethodSchema.default('POST'),
        TF_HTTP_UNLOCK_ADDRESS: zod_1.z.string().url(),
        TF_HTTP_UNLOCK_METHOD: consts_1.HttpMethodSchema.default('POST'),
        TF_HTTP_USERNAME: zod_1.z.string().optional(),
        TF_HTTP_PASSWORD: zod_1.z.string().optional(),
    }),
    driverUnionSchema,
)
exports.config = configSchema.parse(process.env)
