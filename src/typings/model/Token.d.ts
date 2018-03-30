import * as mongoose from 'mongoose'
declare global {
    interface Token extends mongoose.Model<any> {
        _id: string;//主键
        outTime: Number;//项目名称
        value: string;
        token:string;
    }
}