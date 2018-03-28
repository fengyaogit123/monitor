//用户
'use strict';
import { Controller } from 'egg';
export default class UserController extends Controller {
    async create(): Promise<void> {
        const rule = {
            userName: { type: "string", required: true, message: "请输入用户名" },
            password: { type: "string", required: true, message: "请输入密码" }
        }
        let result = this.ctx.helper.validate(rule, this.ctx.query);
        console.log(result)
        this.ctx.body = await this.ctx.model.Users.find(this.ctx.query);
        // this.ctx.body = await this.service.users.create(this.ctx.request.body);
    }
}
