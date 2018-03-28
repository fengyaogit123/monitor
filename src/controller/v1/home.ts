'use strict';
import { Controller } from 'egg';
export default class HomeController extends Controller {
    async index(): Promise<void> {
        const rule = {
            userName: { type: "string", required: true, message: "请输入用户名" },
            password: { type: "string", required: true, message: "请输入密码" }
        }
        console.log(this.ctx.query)
        let result =await this.ctx.helper.validate(rule, this.ctx.query);
        if(result)return
        console.log(result)
        this.ctx.body = 'hahah'
    }
}