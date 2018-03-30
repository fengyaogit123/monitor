import * as mongoose from 'mongoose'
declare global {
    interface Users extends mongoose.Model<any> {
        _id?: string;//主键
        username?: string;//账号
        password: string;//密码
        phone?: string;//手机
        email: string;
    }
}