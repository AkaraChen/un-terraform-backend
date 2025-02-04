import { H3Event } from 'h3'
import { config } from '~~/config/config'

const throwError = (event: H3Event) => {
    setResponseHeader(
        event,
        'WWW-Authenticate',
        'Basic realm="Please enter your username and password"',
    )
    throw createError({
        statusCode: 401,
        message: 'Missing credentials',
    })
}

export default defineEventHandler(event => {
    setResponseHeader(event, 'Cache-Control', 'no-store')
    if (!config.TF_HTTP_USERNAME || !config.TF_HTTP_PASSWORD) {
        return
    }
    const authorization = getHeader(event, 'Authorization')
    if (!authorization) {
        throwError(event)
    }
    const [type, credentials] = authorization.split(' ')
    if (type !== 'Basic' || credentials === undefined) {
        throwError(event)
    }
    const [username, password] = Buffer.from(credentials, 'base64')
        .toString()
        .split(':')
    if (
        username !== config.TF_HTTP_USERNAME ||
        password !== config.TF_HTTP_PASSWORD
    ) {
        throwError(event)
    }
    return
})
