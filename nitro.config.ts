import { config } from './config/config'

//https://nitro.unjs.io/config
export default defineNitroConfig({
    srcDir: 'server',
    preset: config.NITRO_PRESET,
    noExternals: false,
    compatibilityDate: config.NITRO_COMPATIBILITY_DATE as any,
    rollupConfig: {
        onwarn(warning) {
            if (/external dependency/.test(warning.message)) return
            console.error(warning.message)
        },
    },
    moduleSideEffects: [
        'unenv/runtime/polyfill/',
        'node-fetch-native/polyfill',
        'dotenv/config',
    ],
})
