import * as Egg from 'egg'
export default (app: Egg.Application) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    return mongoose.model('Project',
        new Schema({
            pName: { type: String },//项目名称
            sendEmails: [{ type: Schema.Types.ObjectId, ref: 'Users' }],//关注的用户 需要发送邮件 
            hosts: [{ type: String }],//域名过滤 只有指定域名的请求，才被允许
            filter: [{ type: String }],//错误信息过滤
        }, {
                versionKey: false,
                timestamps: true
            }));
};