import * as Egg from 'egg'
export default class LogService extends Egg.Service {
    async create(log: Log): Promise<Log> {
        return await this.ctx.model.Log.create(log)
    }
}
