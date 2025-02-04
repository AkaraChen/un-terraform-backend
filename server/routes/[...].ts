import { config } from '~~/config/config'
import { H3Event, EventHandler } from 'h3'
import { Service } from '~/utils/service'
import logger from '~/utils/logger'

function router(
    handlers: {
        state: EventHandler
        lock: EventHandler
        unlock: EventHandler
    },
    event: H3Event,
) {
    const statePath = new URL(config.TF_HTTP_ADDRESS).pathname
    const lockPath = new URL(config.TF_HTTP_LOCK_ADDRESS).pathname
    const unlockPath = new URL(config.TF_HTTP_UNLOCK_ADDRESS).pathname
    const { state, lock, unlock } = handlers
    const url = new URL(getRequestURL(event))
    switch (url.pathname) {
        case statePath:
            return state(event)
        case lockPath:
            return lock(event)
        case unlockPath:
            return unlock(event)
        default:
            throw createError({
                statusCode: 404,
                message: 'Not found',
            })
    }
}

const service = new Service()

const state: EventHandler = async event => {
    switch (event.method) {
        case 'GET': {
            const state = await service.getState()
            if (!state) {
                logger.info('State not found')
                throw createError({
                    statusCode: 404,
                    message: 'State not found',
                })
            }
            logger.info('GET state')
            return state
        }
        case 'DELETE': {
            logger.info('DELETE state')
            await service.deleteState()
            break
        }
        case config.TF_HTTP_UPDATE_METHOD: {
            logger.info('SET state')
            await service.setState(await readBody(event))
            break
        }
        default: {
            logger.info(`Method not allowed: ${event.method}`)
            throw createError({
                statusCode: 405,
                message: `Method not allowed: ${event.method}`,
            })
        }
    }
}

const lock: EventHandler = async event => {
    const lock = await service.getLock()
    if (lock) {
        logger.info('Lock already exists')
        setResponseStatus(event, 423)
        return await service.getLock()
    } else {
        logger.info('Lock created')
        const content = await readBody(event)
        await service.lock(content)
        return content
    }
}

const unlock: EventHandler = async _event => {
    logger.info('Unlock')
    await service.unlock()
    return ''
}

export default defineEventHandler(async event => {
    await service.init()
    const routes = { state, lock, unlock }
    return router(routes, event)
})
