import { type Config, config } from '../config/config'
import { spawnSync } from 'child_process'

type Dep = {
    name: string
    version: string
}

const definations: Partial<Record<Config['DRIVER'], Dep[]>> = {
    'azure-app-configuration': [
        {
            name: '@azure/app-configuration',
            version: '1.8.0',
        },
        {
            name: '@azure/identity',
            version: '4.6.0',
        },
    ],
    'azure-key-vault': [
        {
            name: '@azure/keyvault-secrets',
            version: '4.9.0',
        },
        {
            name: '@azure/identity',
            version: '4.6.0',
        },
    ],
    'azure-storage-blob': [
        {
            name: 'azure-storage-blob',
            version: '12.26.0',
        },
        {
            name: '@azure/identity',
            version: '4.6.0',
        },
    ],
    redis: [
        {
            name: 'ioredis',
            version: '5.4.2',
        },
    ],
    s3: [
        {
            name: 'aws4fetch',
            version: '1.0.20',
        },
    ],
    uploadthing: [
        {
            name: 'uploadthing',
            version: '7.4.4',
        },
    ],
    upstash: [
        {
            name: '@upstash/redis',
            version: '1.34.3',
        },
    ],
    'vercel-kv': [
        {
            name: '@vercel/kv',
            version: '3.0.0',
        },
    ],
}

if (!globalThis.Deno) {
    definations['deno-kv'] = [
        {
            name: '@deno/kv',
            version: '0.9.0',
        },
    ]
}

const main = async () => {
    const deps = definations[config.DRIVER as keyof typeof definations]
    if (!deps) return
    console.info(
        `Missing dependencies for ${config.DRIVER}: ${deps.map(dep => dep.name).join(', ')}`,
    )
    const child = spawnSync(
        'npx',
        [
            '-y',
            'nypm install',
            ...deps.map(dep => `${dep.name}@${dep.version}`),
        ],
        {
            cwd: process.cwd(),
            shell: true,
        },
    )
    process.stdout.write(child.stdout)
    process.stderr.write(child.stderr)
}

main()
