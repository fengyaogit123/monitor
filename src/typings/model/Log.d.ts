import * as mongoose from 'mongoose'
declare global {
    export interface Log extends mongoose.Model<any> {
        _id: string;//主键
        project: any;
        browserVer: string;//浏览器版本
        browserName: string;//浏览器名称 QQ 火狐 谷歌 360 苹果 搜狗 IE
        phoneSystemType: string;//手机系统类型 android ios
        phoneSystemVer: string;//手机系统版本  android 4.1 ios6
        phoneName: string;//小米 魅族
        url: string;//错误url
        ip: string;//
        actions: [{
            type: string,
            target: string,
            time: string
        }];//操作信息
        user: {
            username: string,
            wxname: string,
            userProp: string,
            loginname: string
        };
    }
}