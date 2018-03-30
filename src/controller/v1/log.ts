'use strict';
import { Controller } from 'egg';
export default class logController extends Controller {
    async create() {
        const rule = {
            project: { type: "string", required: true, message: "请输入项目" },
        }
        const data = this.ctx.query;
        await this.ctx.validate(rule, data);
        //判断域名是否符合要求
        //根据projectid 获取允许域名
        this.ctx.body = await this.service.log.create({
            ...data,
            ip: this.ctx.ip
        })
        //根据 project 获取email 发送
    }
    //获取全部
    async list() {
        this.ctx.body = await this.service.log.list(this.ctx.query)
    }
    //删除多个
    async dels() {
        const rule = {
            ids: { type: "array", required: true, message: "ids为空" }
        }
        const data = this.ctx.request.body
        await this.ctx.validate(rule, data);
        
        this.ctx.body = await this.service.log.dels(data.ids)
    }
}
