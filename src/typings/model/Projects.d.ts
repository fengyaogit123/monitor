import * as mongoose from 'mongoose'
declare global {
    interface Project extends mongoose.Document {
        _id: string;//主键
        pName: string;//项目名称
        sendEmails: Array<any>;
        hosts: Array<String>;
        filter: Array<String>;
    }
}