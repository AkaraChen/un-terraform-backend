const createMethod = (method: string) => {
    return (...args: any[]) => {
        console.log(`[${method}] `, ...args)
    }
}

const logger = {
    info: createMethod('info'),
    warn: createMethod('warn'),
    error: createMethod('error'),
}

export default logger
