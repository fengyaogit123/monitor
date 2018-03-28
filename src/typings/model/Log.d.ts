import * as mongoose from 'mongoose'
declare global {
    interface Log extends mongoose.Document {
        _id: string;//主键
        project: any;
        browserVer: String;//浏览器版本
        browserName: String;//浏览器名称 QQ 火狐 谷歌 360 苹果 搜狗 IE
        phoneSystemType: String;//手机系统类型 android ios
        phoneSystemVer: String;//手机系统版本  android 4.1 ios6
        phoneName: String;//小米 魅族
        url: String;//错误url
    }
}