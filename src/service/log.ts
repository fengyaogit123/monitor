import * as Egg from 'egg'
export default class LogService extends Egg.Service {
    async create(log: Log): Promise<Log> {
        return await this.ctx.model.Log.create(log)
    }
    async list(params: any = {}): Promise<Array<Log>> {
        const { QueryPage } = this.ctx.helper;
        const { size, pageNo, ...query } = params;
        const Log = this.ctx.model.Log;

        const result = await QueryPage({ size, pageNo }, () => {
            return Log.find(query).sort({ _id: -1 })
        });

        return result;
    }
    async dels(ids: Array<String>) {
        const Log = this.ctx.model.Log;
        await Log.remove({ _id: { $in: ids } })
    }
}
