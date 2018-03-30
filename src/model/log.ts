import * as Egg from 'egg'
export default (app: Egg.Application) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    return mongoose.model('Log', new mongoose.Schema({
        project: { type: Schema.Types.ObjectId, ref: 'Project' },
        browserVer: String,//浏览器版本
        browserName: String,//浏览器名称 QQ 火狐 谷歌 360 苹果 搜狗 IE
        phoneSystemType: String,//手机系统类型 android ios
        phoneSystemVer: String,//手机系统版本  android 4.1 ios6
        phoneName: String,//小米 魅族
        isSolve: Boolean,//是否解决
        errorRank: Number,//错误等级
        actions: [{
            type: String,
            target: String,
            time: String
        }],//操作信息
        url: String,//错误url
        route: String,//路由
        details: String,//
        errorDetails: String,//堆栈详情
        ip: String,//
        user: {
            username: String,
            wxname: String,
            userProp: String,
            loginname: String
        }
    }, {
            versionKey: false,
            timestamps: true
        }))
};