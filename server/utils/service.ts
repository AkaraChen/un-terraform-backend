import { Storage } from 'unstorage'

export class Service {
    private storage!: Storage
    private storagePrefix: string

    constructor() {
        this.storagePrefix = 'tfstate/'
        this.stateKey = this.storagePrefix + 'terraform.tfstate'
        this.lockKey = this.storagePrefix + 'terraform.tfstate.lock'
    }

    inited = false

    async init() {
        if (this.inited) {
            return
        }
        this.storage = await createStorage()
        this.inited = true
    }

    private stateKey: string

    async getState(): Promise<object | null> {
        const state = await this.storage.getItem(this.stateKey)
        if (!state) {
            return null
        }
        if (typeof state !== 'object') {
            return null
        }
        return state
    }

    async setState(state: object): Promise<void> {
        await this.storage.setItem(this.stateKey, state)
    }

    async deleteState(): Promise<void> {
        await this.storage.removeItem(this.stateKey)
    }

    lockKey: string

    async getLock(): Promise<object | null> {
        const lock = await this.storage.getItem(this.lockKey)
        if (lock !== null && typeof lock === 'object') {
            return lock
        }
        return null
    }

    async lock(body: object) {
        await this.storage.setItem(this.lockKey, body)
    }

    async unlock() {
        await this.storage.remove(this.lockKey)
    }
}
