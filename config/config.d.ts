import 'dotenv/config'
import { z } from 'zod'
declare const configSchema: z.ZodIntersection<
    z.ZodObject<
        {
            NITRO_PRESET: z.ZodDefault<
                z.ZodEnum<
                    [
                        'alwaysdata',
                        'aws-amplify',
                        'awsAmplify',
                        'aws_amplify',
                        'aws-lambda',
                        'awsLambda',
                        'aws_lambda',
                        'azure',
                        'azure-functions',
                        'azureFunctions',
                        'azure_functions',
                        'azure-swa',
                        'azureSwa',
                        'azure_swa',
                        'base-worker',
                        'baseWorker',
                        'base_worker',
                        'bun',
                        'cleavr',
                        'cli',
                        'cloudflare',
                        'cloudflare-durable',
                        'cloudflareDurable',
                        'cloudflare_durable',
                        'cloudflare-module',
                        'cloudflareModule',
                        'cloudflare_module',
                        'cloudflare-module-legacy',
                        'cloudflareModuleLegacy',
                        'cloudflare_module_legacy',
                        'cloudflare-pages',
                        'cloudflarePages',
                        'cloudflare_pages',
                        'cloudflare-pages-static',
                        'cloudflarePagesStatic',
                        'cloudflare_pages_static',
                        'cloudflare-worker',
                        'cloudflareWorker',
                        'cloudflare_worker',
                        'deno',
                        'deno-deploy',
                        'denoDeploy',
                        'deno_deploy',
                        'deno-server',
                        'denoServer',
                        'deno_server',
                        'digital-ocean',
                        'digitalOcean',
                        'digital_ocean',
                        'edgio',
                        'firebase',
                        'flight-control',
                        'flightControl',
                        'flight_control',
                        'genezio',
                        'github-pages',
                        'githubPages',
                        'github_pages',
                        'gitlab-pages',
                        'gitlabPages',
                        'gitlab_pages',
                        'heroku',
                        'iis',
                        'iis-handler',
                        'iisHandler',
                        'iis_handler',
                        'iis-node',
                        'iisNode',
                        'iis_node',
                        'koyeb',
                        'layer0',
                        'netlify',
                        'netlify-builder',
                        'netlifyBuilder',
                        'netlify_builder',
                        'netlify-edge',
                        'netlifyEdge',
                        'netlify_edge',
                        'netlify-legacy',
                        'netlifyLegacy',
                        'netlify_legacy',
                        'netlify-static',
                        'netlifyStatic',
                        'netlify_static',
                        'nitro-dev',
                        'nitroDev',
                        'nitro_dev',
                        'nitro-prerender',
                        'nitroPrerender',
                        'nitro_prerender',
                        'node',
                        'node-cluster',
                        'nodeCluster',
                        'node_cluster',
                        'node-listener',
                        'nodeListener',
                        'node_listener',
                        'node-server',
                        'nodeServer',
                        'node_server',
                        'platform-sh',
                        'platformSh',
                        'platform_sh',
                        'render-com',
                        'renderCom',
                        'render_com',
                        'service-worker',
                        'serviceWorker',
                        'service_worker',
                        'static',
                        'stormkit',
                        'vercel',
                        'vercel-edge',
                        'vercelEdge',
                        'vercel_edge',
                        'vercel-static',
                        'vercelStatic',
                        'vercel_static',
                        'winterjs',
                        'zeabur',
                        'zeabur-static',
                        'zeaburStatic',
                        'zeabur_static',
                        'zerops',
                        'zerops-static',
                        'zeropsStatic',
                        'zerops_static',
                    ]
                >
            >
            NITRO_COMPATIBILITY_DATE: z.ZodOptional<z.ZodString>
            TF_HTTP_ADDRESS: z.ZodString
            TF_HTTP_UPDATE_METHOD: z.ZodDefault<
                z.ZodEnum<
                    ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'LOCK', 'UNLOCK']
                >
            >
            TF_HTTP_LOCK_ADDRESS: z.ZodString
            TF_HTTP_LOCK_METHOD: z.ZodDefault<
                z.ZodEnum<
                    ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'LOCK', 'UNLOCK']
                >
            >
            TF_HTTP_UNLOCK_ADDRESS: z.ZodString
            TF_HTTP_UNLOCK_METHOD: z.ZodDefault<
                z.ZodEnum<
                    ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'LOCK', 'UNLOCK']
                >
            >
            TF_HTTP_USERNAME: z.ZodOptional<z.ZodString>
            TF_HTTP_PASSWORD: z.ZodOptional<z.ZodString>
        },
        'strip',
        z.ZodTypeAny,
        {
            NITRO_PRESET?:
                | 'alwaysdata'
                | 'aws-amplify'
                | 'awsAmplify'
                | 'aws_amplify'
                | 'aws-lambda'
                | 'awsLambda'
                | 'aws_lambda'
                | 'azure'
                | 'azure-functions'
                | 'azureFunctions'
                | 'azure_functions'
                | 'azure-swa'
                | 'azureSwa'
                | 'azure_swa'
                | 'base-worker'
                | 'baseWorker'
                | 'base_worker'
                | 'bun'
                | 'cleavr'
                | 'cli'
                | 'cloudflare'
                | 'cloudflare-durable'
                | 'cloudflareDurable'
                | 'cloudflare_durable'
                | 'cloudflare-module'
                | 'cloudflareModule'
                | 'cloudflare_module'
                | 'cloudflare-module-legacy'
                | 'cloudflareModuleLegacy'
                | 'cloudflare_module_legacy'
                | 'cloudflare-pages'
                | 'cloudflarePages'
                | 'cloudflare_pages'
                | 'cloudflare-pages-static'
                | 'cloudflarePagesStatic'
                | 'cloudflare_pages_static'
                | 'cloudflare-worker'
                | 'cloudflareWorker'
                | 'cloudflare_worker'
                | 'deno'
                | 'deno-deploy'
                | 'denoDeploy'
                | 'deno_deploy'
                | 'deno-server'
                | 'denoServer'
                | 'deno_server'
                | 'digital-ocean'
                | 'digitalOcean'
                | 'digital_ocean'
                | 'edgio'
                | 'firebase'
                | 'flight-control'
                | 'flightControl'
                | 'flight_control'
                | 'genezio'
                | 'github-pages'
                | 'githubPages'
                | 'github_pages'
                | 'gitlab-pages'
                | 'gitlabPages'
                | 'gitlab_pages'
                | 'heroku'
                | 'iis'
                | 'iis-handler'
                | 'iisHandler'
                | 'iis_handler'
                | 'iis-node'
                | 'iisNode'
                | 'iis_node'
                | 'koyeb'
                | 'layer0'
                | 'netlify'
                | 'netlify-builder'
                | 'netlifyBuilder'
                | 'netlify_builder'
                | 'netlify-edge'
                | 'netlifyEdge'
                | 'netlify_edge'
                | 'netlify-legacy'
                | 'netlifyLegacy'
                | 'netlify_legacy'
                | 'netlify-static'
                | 'netlifyStatic'
                | 'netlify_static'
                | 'nitro-dev'
                | 'nitroDev'
                | 'nitro_dev'
                | 'nitro-prerender'
                | 'nitroPrerender'
                | 'nitro_prerender'
                | 'node'
                | 'node-cluster'
                | 'nodeCluster'
                | 'node_cluster'
                | 'node-listener'
                | 'nodeListener'
                | 'node_listener'
                | 'node-server'
                | 'nodeServer'
                | 'node_server'
                | 'platform-sh'
                | 'platformSh'
                | 'platform_sh'
                | 'render-com'
                | 'renderCom'
                | 'render_com'
                | 'service-worker'
                | 'serviceWorker'
                | 'service_worker'
                | 'static'
                | 'stormkit'
                | 'vercel'
                | 'vercel-edge'
                | 'vercelEdge'
                | 'vercel_edge'
                | 'vercel-static'
                | 'vercelStatic'
                | 'vercel_static'
                | 'winterjs'
                | 'zeabur'
                | 'zeabur-static'
                | 'zeaburStatic'
                | 'zeabur_static'
                | 'zerops'
                | 'zerops-static'
                | 'zeropsStatic'
                | 'zerops_static'
            NITRO_COMPATIBILITY_DATE?: string
            TF_HTTP_ADDRESS?: string
            TF_HTTP_UPDATE_METHOD?:
                | 'GET'
                | 'POST'
                | 'PUT'
                | 'DELETE'
                | 'PATCH'
                | 'LOCK'
                | 'UNLOCK'
            TF_HTTP_LOCK_ADDRESS?: string
            TF_HTTP_LOCK_METHOD?:
                | 'GET'
                | 'POST'
                | 'PUT'
                | 'DELETE'
                | 'PATCH'
                | 'LOCK'
                | 'UNLOCK'
            TF_HTTP_UNLOCK_ADDRESS?: string
            TF_HTTP_UNLOCK_METHOD?:
                | 'GET'
                | 'POST'
                | 'PUT'
                | 'DELETE'
                | 'PATCH'
                | 'LOCK'
                | 'UNLOCK'
            TF_HTTP_USERNAME?: string
            TF_HTTP_PASSWORD?: string
        },
        {
            NITRO_PRESET?:
                | 'alwaysdata'
                | 'aws-amplify'
                | 'awsAmplify'
                | 'aws_amplify'
                | 'aws-lambda'
                | 'awsLambda'
                | 'aws_lambda'
                | 'azure'
                | 'azure-functions'
                | 'azureFunctions'
                | 'azure_functions'
                | 'azure-swa'
                | 'azureSwa'
                | 'azure_swa'
                | 'base-worker'
                | 'baseWorker'
                | 'base_worker'
                | 'bun'
                | 'cleavr'
                | 'cli'
                | 'cloudflare'
                | 'cloudflare-durable'
                | 'cloudflareDurable'
                | 'cloudflare_durable'
                | 'cloudflare-module'
                | 'cloudflareModule'
                | 'cloudflare_module'
                | 'cloudflare-module-legacy'
                | 'cloudflareModuleLegacy'
                | 'cloudflare_module_legacy'
                | 'cloudflare-pages'
                | 'cloudflarePages'
                | 'cloudflare_pages'
                | 'cloudflare-pages-static'
                | 'cloudflarePagesStatic'
                | 'cloudflare_pages_static'
                | 'cloudflare-worker'
                | 'cloudflareWorker'
                | 'cloudflare_worker'
                | 'deno'
                | 'deno-deploy'
                | 'denoDeploy'
                | 'deno_deploy'
                | 'deno-server'
                | 'denoServer'
                | 'deno_server'
                | 'digital-ocean'
                | 'digitalOcean'
                | 'digital_ocean'
                | 'edgio'
                | 'firebase'
                | 'flight-control'
                | 'flightControl'
                | 'flight_control'
                | 'genezio'
                | 'github-pages'
                | 'githubPages'
                | 'github_pages'
                | 'gitlab-pages'
                | 'gitlabPages'
                | 'gitlab_pages'
                | 'heroku'
                | 'iis'
                | 'iis-handler'
                | 'iisHandler'
                | 'iis_handler'
                | 'iis-node'
                | 'iisNode'
                | 'iis_node'
                | 'koyeb'
                | 'layer0'
                | 'netlify'
                | 'netlify-builder'
                | 'netlifyBuilder'
                | 'netlify_builder'
                | 'netlify-edge'
                | 'netlifyEdge'
                | 'netlify_edge'
                | 'netlify-legacy'
                | 'netlifyLegacy'
                | 'netlify_legacy'
                | 'netlify-static'
                | 'netlifyStatic'
                | 'netlify_static'
                | 'nitro-dev'
                | 'nitroDev'
                | 'nitro_dev'
                | 'nitro-prerender'
                | 'nitroPrerender'
                | 'nitro_prerender'
                | 'node'
                | 'node-cluster'
                | 'nodeCluster'
                | 'node_cluster'
                | 'node-listener'
                | 'nodeListener'
                | 'node_listener'
                | 'node-server'
                | 'nodeServer'
                | 'node_server'
                | 'platform-sh'
                | 'platformSh'
                | 'platform_sh'
                | 'render-com'
                | 'renderCom'
                | 'render_com'
                | 'service-worker'
                | 'serviceWorker'
                | 'service_worker'
                | 'static'
                | 'stormkit'
                | 'vercel'
                | 'vercel-edge'
                | 'vercelEdge'
                | 'vercel_edge'
                | 'vercel-static'
                | 'vercelStatic'
                | 'vercel_static'
                | 'winterjs'
                | 'zeabur'
                | 'zeabur-static'
                | 'zeaburStatic'
                | 'zeabur_static'
                | 'zerops'
                | 'zerops-static'
                | 'zeropsStatic'
                | 'zerops_static'
            NITRO_COMPATIBILITY_DATE?: string
            TF_HTTP_ADDRESS?: string
            TF_HTTP_UPDATE_METHOD?:
                | 'GET'
                | 'POST'
                | 'PUT'
                | 'DELETE'
                | 'PATCH'
                | 'LOCK'
                | 'UNLOCK'
            TF_HTTP_LOCK_ADDRESS?: string
            TF_HTTP_LOCK_METHOD?:
                | 'GET'
                | 'POST'
                | 'PUT'
                | 'DELETE'
                | 'PATCH'
                | 'LOCK'
                | 'UNLOCK'
            TF_HTTP_UNLOCK_ADDRESS?: string
            TF_HTTP_UNLOCK_METHOD?:
                | 'GET'
                | 'POST'
                | 'PUT'
                | 'DELETE'
                | 'PATCH'
                | 'LOCK'
                | 'UNLOCK'
            TF_HTTP_USERNAME?: string
            TF_HTTP_PASSWORD?: string
        }
    >,
    z.ZodDiscriminatedUnion<
        'DRIVER',
        [
            z.ZodObject<
                {
                    DRIVER: z.ZodLiteral<'fs'>
                    DRIVER_FS_BASE: z.ZodEffects<z.ZodString, string, string>
                },
                'strip',
                z.ZodTypeAny,
                {
                    DRIVER?: 'fs'
                    DRIVER_FS_BASE?: string
                },
                {
                    DRIVER?: 'fs'
                    DRIVER_FS_BASE?: string
                }
            >,
            z.ZodObject<
                {
                    DRIVER: z.ZodLiteral<'azure-app-configuration'>
                    AZURE_TENANT_ID: z.ZodString
                    AZURE_CLIENT_ID: z.ZodString
                    AZURE_CLIENT_SECRET: z.ZodString
                    DRIVER_AZURE_APP_CONFIGURATION_CONFIG_NAME: z.ZodString
                    DRIVER_AZURE_APP_CONFIGURATION_LABEL: z.ZodString
                    DRIVER_AZURE_APP_CONFIGURATION_PREFIX: z.ZodString
                },
                'strip',
                z.ZodTypeAny,
                {
                    DRIVER?: 'azure-app-configuration'
                    AZURE_TENANT_ID?: string
                    AZURE_CLIENT_ID?: string
                    AZURE_CLIENT_SECRET?: string
                    DRIVER_AZURE_APP_CONFIGURATION_CONFIG_NAME?: string
                    DRIVER_AZURE_APP_CONFIGURATION_LABEL?: string
                    DRIVER_AZURE_APP_CONFIGURATION_PREFIX?: string
                },
                {
                    DRIVER?: 'azure-app-configuration'
                    AZURE_TENANT_ID?: string
                    AZURE_CLIENT_ID?: string
                    AZURE_CLIENT_SECRET?: string
                    DRIVER_AZURE_APP_CONFIGURATION_CONFIG_NAME?: string
                    DRIVER_AZURE_APP_CONFIGURATION_LABEL?: string
                    DRIVER_AZURE_APP_CONFIGURATION_PREFIX?: string
                }
            >,
            z.ZodObject<
                {
                    DRIVER: z.ZodLiteral<'azure-key-vault'>
                    AZURE_TENANT_ID: z.ZodString
                    AZURE_CLIENT_ID: z.ZodString
                    AZURE_CLIENT_SECRET: z.ZodString
                    DRIVER_AZURE_KEY_VAULT_NAME: z.ZodString
                },
                'strip',
                z.ZodTypeAny,
                {
                    DRIVER?: 'azure-key-vault'
                    AZURE_TENANT_ID?: string
                    AZURE_CLIENT_ID?: string
                    AZURE_CLIENT_SECRET?: string
                    DRIVER_AZURE_KEY_VAULT_NAME?: string
                },
                {
                    DRIVER?: 'azure-key-vault'
                    AZURE_TENANT_ID?: string
                    AZURE_CLIENT_ID?: string
                    AZURE_CLIENT_SECRET?: string
                    DRIVER_AZURE_KEY_VAULT_NAME?: string
                }
            >,
            z.ZodObject<
                {
                    DRIVER: z.ZodLiteral<'azure-storage-blob'>
                    AZURE_TENANT_ID: z.ZodString
                    AZURE_CLIENT_ID: z.ZodString
                    AZURE_CLIENT_SECRET: z.ZodString
                    DRIVER_AZURE_STORAGE_BLOB_ACCOUNT_NAME: z.ZodString
                },
                'strip',
                z.ZodTypeAny,
                {
                    DRIVER?: 'azure-storage-blob'
                    AZURE_TENANT_ID?: string
                    AZURE_CLIENT_ID?: string
                    AZURE_CLIENT_SECRET?: string
                    DRIVER_AZURE_STORAGE_BLOB_ACCOUNT_NAME?: string
                },
                {
                    DRIVER?: 'azure-storage-blob'
                    AZURE_TENANT_ID?: string
                    AZURE_CLIENT_ID?: string
                    AZURE_CLIENT_SECRET?: string
                    DRIVER_AZURE_STORAGE_BLOB_ACCOUNT_NAME?: string
                }
            >,
            z.ZodObject<
                {
                    DRIVER: z.ZodLiteral<'cloudflare-kv-binding'>
                    DRIVER_CLOUDFLARE_KV_BINDING_NAME: z.ZodString
                    DRIVER_CLOUDFLARE_KV_BINDING_PREFIX: z.ZodString
                },
                'strip',
                z.ZodTypeAny,
                {
                    DRIVER?: 'cloudflare-kv-binding'
                    DRIVER_CLOUDFLARE_KV_BINDING_NAME?: string
                    DRIVER_CLOUDFLARE_KV_BINDING_PREFIX?: string
                },
                {
                    DRIVER?: 'cloudflare-kv-binding'
                    DRIVER_CLOUDFLARE_KV_BINDING_NAME?: string
                    DRIVER_CLOUDFLARE_KV_BINDING_PREFIX?: string
                }
            >,
            z.ZodObject<
                {
                    DRIVER: z.ZodLiteral<'cloudflare-kv-http'>
                    DRIVER_CLOUDFLARE_API_TOKEN: z.ZodString
                    DRIVER_CLOUDFLARE_ACCOUNT_ID: z.ZodString
                    DRIVER_CLOUDFLARE_KV_NAMESPACE_ID: z.ZodString
                },
                'strip',
                z.ZodTypeAny,
                {
                    DRIVER?: 'cloudflare-kv-http'
                    DRIVER_CLOUDFLARE_API_TOKEN?: string
                    DRIVER_CLOUDFLARE_ACCOUNT_ID?: string
                    DRIVER_CLOUDFLARE_KV_NAMESPACE_ID?: string
                },
                {
                    DRIVER?: 'cloudflare-kv-http'
                    DRIVER_CLOUDFLARE_API_TOKEN?: string
                    DRIVER_CLOUDFLARE_ACCOUNT_ID?: string
                    DRIVER_CLOUDFLARE_KV_NAMESPACE_ID?: string
                }
            >,
            z.ZodObject<
                {
                    DRIVER: z.ZodLiteral<'cloudflare-r2-binding'>
                    DRIVER_CLOUDFLARE_R2_BINDING_NAME: z.ZodString
                },
                'strip',
                z.ZodTypeAny,
                {
                    DRIVER?: 'cloudflare-r2-binding'
                    DRIVER_CLOUDFLARE_R2_BINDING_NAME?: string
                },
                {
                    DRIVER?: 'cloudflare-r2-binding'
                    DRIVER_CLOUDFLARE_R2_BINDING_NAME?: string
                }
            >,
            z.ZodObject<
                {
                    DRIVER: z.ZodLiteral<'deno-kv'>
                    DRIVER_DENO_KV_PATH: z.ZodString
                    DRIVER_DENO_KV_PREFIX: z.ZodString
                },
                'strip',
                z.ZodTypeAny,
                {
                    DRIVER?: 'deno-kv'
                    DRIVER_DENO_KV_PATH?: string
                    DRIVER_DENO_KV_PREFIX?: string
                },
                {
                    DRIVER?: 'deno-kv'
                    DRIVER_DENO_KV_PATH?: string
                    DRIVER_DENO_KV_PREFIX?: string
                }
            >,
            z.ZodObject<
                {
                    DRIVER: z.ZodLiteral<'netlify-blob'>
                    DRIVER_NETLIFY_BLOB_NAME: z.ZodString
                },
                'strip',
                z.ZodTypeAny,
                {
                    DRIVER?: 'netlify-blob'
                    DRIVER_NETLIFY_BLOB_NAME?: string
                },
                {
                    DRIVER?: 'netlify-blob'
                    DRIVER_NETLIFY_BLOB_NAME?: string
                }
            >,
            z.ZodObject<
                {
                    DRIVER: z.ZodLiteral<'redis'>
                    DRIVER_REDIS_PREFIX: z.ZodString
                    DRIVER_REDIS_HOST: z.ZodString
                    DRIVER_REDIS_TLS: z.ZodString
                    DRIVER_REDIS_PORT: z.ZodEffects<z.ZodString, string, string>
                    DRIVER_REDIS_USERNAME: z.ZodString
                    DRIVER_REDIS_PASSWORD: z.ZodString
                },
                'strip',
                z.ZodTypeAny,
                {
                    DRIVER?: 'redis'
                    DRIVER_REDIS_PREFIX?: string
                    DRIVER_REDIS_HOST?: string
                    DRIVER_REDIS_TLS?: string
                    DRIVER_REDIS_PORT?: string
                    DRIVER_REDIS_USERNAME?: string
                    DRIVER_REDIS_PASSWORD?: string
                },
                {
                    DRIVER?: 'redis'
                    DRIVER_REDIS_PREFIX?: string
                    DRIVER_REDIS_HOST?: string
                    DRIVER_REDIS_TLS?: string
                    DRIVER_REDIS_PORT?: string
                    DRIVER_REDIS_USERNAME?: string
                    DRIVER_REDIS_PASSWORD?: string
                }
            >,
            z.ZodObject<
                {
                    DRIVER: z.ZodLiteral<'s3'>
                    DRIVER_S3_BUCKET: z.ZodString
                    DRIVER_S3_ENDPOINT: z.ZodString
                    DRIVER_S3_ACCESS_KEY_ID: z.ZodString
                    DRIVER_S3_SECRET_ACCESS_KEY: z.ZodString
                    DRIVER_S3_REGION: z.ZodString
                },
                'strip',
                z.ZodTypeAny,
                {
                    DRIVER?: 's3'
                    DRIVER_S3_BUCKET?: string
                    DRIVER_S3_ENDPOINT?: string
                    DRIVER_S3_ACCESS_KEY_ID?: string
                    DRIVER_S3_SECRET_ACCESS_KEY?: string
                    DRIVER_S3_REGION?: string
                },
                {
                    DRIVER?: 's3'
                    DRIVER_S3_BUCKET?: string
                    DRIVER_S3_ENDPOINT?: string
                    DRIVER_S3_ACCESS_KEY_ID?: string
                    DRIVER_S3_SECRET_ACCESS_KEY?: string
                    DRIVER_S3_REGION?: string
                }
            >,
            z.ZodObject<
                {
                    DRIVER: z.ZodLiteral<'uploadthing'>
                    UPLOADTHING_SECRET: z.ZodString
                },
                'strip',
                z.ZodTypeAny,
                {
                    DRIVER?: 'uploadthing'
                    UPLOADTHING_SECRET?: string
                },
                {
                    DRIVER?: 'uploadthing'
                    UPLOADTHING_SECRET?: string
                }
            >,
            z.ZodObject<
                {
                    DRIVER: z.ZodLiteral<'upstash'>
                    DRIVER_UPSTASH_PREFIX: z.ZodDefault<z.ZodString>
                },
                'strip',
                z.ZodTypeAny,
                {
                    DRIVER?: 'upstash'
                    DRIVER_UPSTASH_PREFIX?: string
                },
                {
                    DRIVER?: 'upstash'
                    DRIVER_UPSTASH_PREFIX?: string
                }
            >,
            z.ZodObject<
                {
                    DRIVER: z.ZodLiteral<'vercel-kv'>
                    KV_REST_API_URL: z.ZodString
                    KV_REST_API_TOKEN: z.ZodString
                    DRIVER_VERCEL_KV_PREFIX: z.ZodString
                },
                'strip',
                z.ZodTypeAny,
                {
                    DRIVER?: 'vercel-kv'
                    KV_REST_API_URL?: string
                    KV_REST_API_TOKEN?: string
                    DRIVER_VERCEL_KV_PREFIX?: string
                },
                {
                    DRIVER?: 'vercel-kv'
                    KV_REST_API_URL?: string
                    KV_REST_API_TOKEN?: string
                    DRIVER_VERCEL_KV_PREFIX?: string
                }
            >,
        ]
    >
>
export type Config = z.infer<typeof configSchema>
export declare const config: {
    NITRO_PRESET?:
        | 'alwaysdata'
        | 'aws-amplify'
        | 'awsAmplify'
        | 'aws_amplify'
        | 'aws-lambda'
        | 'awsLambda'
        | 'aws_lambda'
        | 'azure'
        | 'azure-functions'
        | 'azureFunctions'
        | 'azure_functions'
        | 'azure-swa'
        | 'azureSwa'
        | 'azure_swa'
        | 'base-worker'
        | 'baseWorker'
        | 'base_worker'
        | 'bun'
        | 'cleavr'
        | 'cli'
        | 'cloudflare'
        | 'cloudflare-durable'
        | 'cloudflareDurable'
        | 'cloudflare_durable'
        | 'cloudflare-module'
        | 'cloudflareModule'
        | 'cloudflare_module'
        | 'cloudflare-module-legacy'
        | 'cloudflareModuleLegacy'
        | 'cloudflare_module_legacy'
        | 'cloudflare-pages'
        | 'cloudflarePages'
        | 'cloudflare_pages'
        | 'cloudflare-pages-static'
        | 'cloudflarePagesStatic'
        | 'cloudflare_pages_static'
        | 'cloudflare-worker'
        | 'cloudflareWorker'
        | 'cloudflare_worker'
        | 'deno'
        | 'deno-deploy'
        | 'denoDeploy'
        | 'deno_deploy'
        | 'deno-server'
        | 'denoServer'
        | 'deno_server'
        | 'digital-ocean'
        | 'digitalOcean'
        | 'digital_ocean'
        | 'edgio'
        | 'firebase'
        | 'flight-control'
        | 'flightControl'
        | 'flight_control'
        | 'genezio'
        | 'github-pages'
        | 'githubPages'
        | 'github_pages'
        | 'gitlab-pages'
        | 'gitlabPages'
        | 'gitlab_pages'
        | 'heroku'
        | 'iis'
        | 'iis-handler'
        | 'iisHandler'
        | 'iis_handler'
        | 'iis-node'
        | 'iisNode'
        | 'iis_node'
        | 'koyeb'
        | 'layer0'
        | 'netlify'
        | 'netlify-builder'
        | 'netlifyBuilder'
        | 'netlify_builder'
        | 'netlify-edge'
        | 'netlifyEdge'
        | 'netlify_edge'
        | 'netlify-legacy'
        | 'netlifyLegacy'
        | 'netlify_legacy'
        | 'netlify-static'
        | 'netlifyStatic'
        | 'netlify_static'
        | 'nitro-dev'
        | 'nitroDev'
        | 'nitro_dev'
        | 'nitro-prerender'
        | 'nitroPrerender'
        | 'nitro_prerender'
        | 'node'
        | 'node-cluster'
        | 'nodeCluster'
        | 'node_cluster'
        | 'node-listener'
        | 'nodeListener'
        | 'node_listener'
        | 'node-server'
        | 'nodeServer'
        | 'node_server'
        | 'platform-sh'
        | 'platformSh'
        | 'platform_sh'
        | 'render-com'
        | 'renderCom'
        | 'render_com'
        | 'service-worker'
        | 'serviceWorker'
        | 'service_worker'
        | 'static'
        | 'stormkit'
        | 'vercel'
        | 'vercel-edge'
        | 'vercelEdge'
        | 'vercel_edge'
        | 'vercel-static'
        | 'vercelStatic'
        | 'vercel_static'
        | 'winterjs'
        | 'zeabur'
        | 'zeabur-static'
        | 'zeaburStatic'
        | 'zeabur_static'
        | 'zerops'
        | 'zerops-static'
        | 'zeropsStatic'
        | 'zerops_static'
    NITRO_COMPATIBILITY_DATE?: string
    TF_HTTP_ADDRESS?: string
    TF_HTTP_UPDATE_METHOD?:
        | 'GET'
        | 'POST'
        | 'PUT'
        | 'DELETE'
        | 'PATCH'
        | 'LOCK'
        | 'UNLOCK'
    TF_HTTP_LOCK_ADDRESS?: string
    TF_HTTP_LOCK_METHOD?:
        | 'GET'
        | 'POST'
        | 'PUT'
        | 'DELETE'
        | 'PATCH'
        | 'LOCK'
        | 'UNLOCK'
    TF_HTTP_UNLOCK_ADDRESS?: string
    TF_HTTP_UNLOCK_METHOD?:
        | 'GET'
        | 'POST'
        | 'PUT'
        | 'DELETE'
        | 'PATCH'
        | 'LOCK'
        | 'UNLOCK'
    TF_HTTP_USERNAME?: string
    TF_HTTP_PASSWORD?: string
} & (
    | {
          DRIVER?: 'fs'
          DRIVER_FS_BASE?: string
      }
    | {
          DRIVER?: 'azure-app-configuration'
          AZURE_TENANT_ID?: string
          AZURE_CLIENT_ID?: string
          AZURE_CLIENT_SECRET?: string
          DRIVER_AZURE_APP_CONFIGURATION_CONFIG_NAME?: string
          DRIVER_AZURE_APP_CONFIGURATION_LABEL?: string
          DRIVER_AZURE_APP_CONFIGURATION_PREFIX?: string
      }
    | {
          DRIVER?: 'azure-key-vault'
          AZURE_TENANT_ID?: string
          AZURE_CLIENT_ID?: string
          AZURE_CLIENT_SECRET?: string
          DRIVER_AZURE_KEY_VAULT_NAME?: string
      }
    | {
          DRIVER?: 'azure-storage-blob'
          AZURE_TENANT_ID?: string
          AZURE_CLIENT_ID?: string
          AZURE_CLIENT_SECRET?: string
          DRIVER_AZURE_STORAGE_BLOB_ACCOUNT_NAME?: string
      }
    | {
          DRIVER?: 'cloudflare-kv-binding'
          DRIVER_CLOUDFLARE_KV_BINDING_NAME?: string
          DRIVER_CLOUDFLARE_KV_BINDING_PREFIX?: string
      }
    | {
          DRIVER?: 'cloudflare-kv-http'
          DRIVER_CLOUDFLARE_API_TOKEN?: string
          DRIVER_CLOUDFLARE_ACCOUNT_ID?: string
          DRIVER_CLOUDFLARE_KV_NAMESPACE_ID?: string
      }
    | {
          DRIVER?: 'cloudflare-r2-binding'
          DRIVER_CLOUDFLARE_R2_BINDING_NAME?: string
      }
    | {
          DRIVER?: 'deno-kv'
          DRIVER_DENO_KV_PATH?: string
          DRIVER_DENO_KV_PREFIX?: string
      }
    | {
          DRIVER?: 'netlify-blob'
          DRIVER_NETLIFY_BLOB_NAME?: string
      }
    | {
          DRIVER?: 'redis'
          DRIVER_REDIS_PREFIX?: string
          DRIVER_REDIS_HOST?: string
          DRIVER_REDIS_TLS?: string
          DRIVER_REDIS_PORT?: string
          DRIVER_REDIS_USERNAME?: string
          DRIVER_REDIS_PASSWORD?: string
      }
    | {
          DRIVER?: 's3'
          DRIVER_S3_BUCKET?: string
          DRIVER_S3_ENDPOINT?: string
          DRIVER_S3_ACCESS_KEY_ID?: string
          DRIVER_S3_SECRET_ACCESS_KEY?: string
          DRIVER_S3_REGION?: string
      }
    | {
          DRIVER?: 'uploadthing'
          UPLOADTHING_SECRET?: string
      }
    | {
          DRIVER?: 'upstash'
          DRIVER_UPSTASH_PREFIX?: string
      }
    | {
          DRIVER?: 'vercel-kv'
          KV_REST_API_URL?: string
          KV_REST_API_TOKEN?: string
          DRIVER_VERCEL_KV_PREFIX?: string
      }
)
export {}
