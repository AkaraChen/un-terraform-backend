import 'dotenv/config'
import { z } from 'zod'
import { HttpMethodSchema, nitroPresetSchema } from './consts'

const driverUnionSchema = z.discriminatedUnion('DRIVER', [
    z.object({
        DRIVER: z.literal('fs'),
        DRIVER_FS_BASE: z.string().refine(s => !s.startsWith('.')),
    }),
    z.object({
        DRIVER: z.literal('azure-app-configuration'),
        AZURE_TENANT_ID: z.string().min(1),
        AZURE_CLIENT_ID: z.string().min(1),
        AZURE_CLIENT_SECRET: z.string().min(1),
        DRIVER_AZURE_APP_CONFIGURATION_CONFIG_NAME: z.string(),
        DRIVER_AZURE_APP_CONFIGURATION_LABEL: z.string(),
        DRIVER_AZURE_APP_CONFIGURATION_PREFIX: z.string(),
    }),
    z.object({
        DRIVER: z.literal('azure-key-vault'),
        AZURE_TENANT_ID: z.string().min(1),
        AZURE_CLIENT_ID: z.string().min(1),
        AZURE_CLIENT_SECRET: z.string().min(1),
        DRIVER_AZURE_KEY_VAULT_NAME: z.string(),
    }),
    z.object({
        DRIVER: z.literal('azure-storage-blob'),
        AZURE_TENANT_ID: z.string().min(1),
        AZURE_CLIENT_ID: z.string().min(1),
        AZURE_CLIENT_SECRET: z.string().min(1),
        DRIVER_AZURE_STORAGE_BLOB_ACCOUNT_NAME: z.string(),
    }),
    z.object({
        DRIVER: z.literal('cloudflare-kv-binding'),
        DRIVER_CLOUDFLARE_KV_BINDING_NAME: z.string(),
        DRIVER_CLOUDFLARE_KV_BINDING_PREFIX: z.string(),
    }),
    z.object({
        DRIVER: z.literal('cloudflare-kv-http'),
        DRIVER_CLOUDFLARE_API_TOKEN: z.string(),
        DRIVER_CLOUDFLARE_ACCOUNT_ID: z.string(),
        DRIVER_CLOUDFLARE_KV_NAMESPACE_ID: z.string(),
    }),
    z.object({
        DRIVER: z.literal('cloudflare-r2-binding'),
        DRIVER_CLOUDFLARE_R2_BINDING_NAME: z.string(),
    }),
    z.object({
        DRIVER: z.literal('deno-kv'),
        DRIVER_DENO_KV_PATH: z.string(),
        DRIVER_DENO_KV_PREFIX: z.string(),
    }),
    z.object({
        DRIVER: z.literal('netlify-blob'),
        DRIVER_NETLIFY_BLOB_NAME: z.string(),
    }),
    z.object({
        DRIVER: z.literal('redis'),
        DRIVER_REDIS_PREFIX: z.string(),
        DRIVER_REDIS_HOST: z.string(),
        DRIVER_REDIS_TLS: z.string(),
        DRIVER_REDIS_PORT: z
            .string()
            .regex(/^\d+$/)
            .refine(a => parseInt(a) > 0 && parseInt(a) <= 65535),
        DRIVER_REDIS_USERNAME: z.string(),
        DRIVER_REDIS_PASSWORD: z.string(),
    }),
    z.object({
        DRIVER: z.literal('s3'),
        DRIVER_S3_BUCKET: z.string(),
        DRIVER_S3_ENDPOINT: z.string(),
        DRIVER_S3_ACCESS_KEY_ID: z.string(),
        DRIVER_S3_SECRET_ACCESS_KEY: z.string(),
        DRIVER_S3_REGION: z.string(),
    }),
    z.object({
        DRIVER: z.literal('uploadthing'),
        UPLOADTHING_SECRET: z.string(),
    }),
    z.object({
        DRIVER: z.literal('upstash'),
        DRIVER_UPSTASH_PREFIX: z.string().default('unterraform/'),
    }),
    z.object({
        DRIVER: z.literal('vercel-kv'),
        KV_REST_API_URL: z.string(),
        KV_REST_API_TOKEN: z.string(),
        DRIVER_VERCEL_KV_PREFIX: z.string(),
    }),
])

const configSchema = z.intersection(
    z.object({
        NITRO_PRESET: nitroPresetSchema.default('node'),
        NITRO_COMPATIBILITY_DATE: z.string().min(1).optional(),

        TF_HTTP_ADDRESS: z.string().url(),
        TF_HTTP_UPDATE_METHOD: HttpMethodSchema.default('POST'),
        TF_HTTP_LOCK_ADDRESS: z.string().url(),
        TF_HTTP_LOCK_METHOD: HttpMethodSchema.default('POST'),
        TF_HTTP_UNLOCK_ADDRESS: z.string().url(),
        TF_HTTP_UNLOCK_METHOD: HttpMethodSchema.default('POST'),
        TF_HTTP_USERNAME: z.string().optional(),
        TF_HTTP_PASSWORD: z.string().optional(),
    }),
    driverUnionSchema,
)

export type Config = z.infer<typeof configSchema>

export const config = configSchema.parse(process.env)
