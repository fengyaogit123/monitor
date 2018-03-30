import * as mongoose from 'mongoose'
declare global {
    interface Project extends mongoose.Model<any>   {
        _id: string;//主键
        pName: string;//项目名称
        sendEmails: Array<any>;
        hosts: Array<string>;
        filter: Array<string>;
    }
}