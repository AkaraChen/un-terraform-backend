import { z } from 'zod'

export const nitroPresetSchema = z.enum([
    'bun',
    'deno',
    'deno-deploy',
    'deno-server',
    'digital-ocean',
    'heroku',
    'netlify',
    'netlify-builder',
    'netlify-edge',
    'netlify-legacy',
    'netlify-static',
    'nitro-dev',
    'nitro-prerender',
    'node',
    'node-cluster',
    'node-listener',
    'node-server',
])

export const HttpMethodSchema = z.enum([
    'GET',
    'POST',
    'PUT',
    'DELETE',
    'PATCH',
    'LOCK',
    'UNLOCK',
])
