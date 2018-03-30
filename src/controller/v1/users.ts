//用户
'use strict';
import { Controller } from 'egg';
export default class UserController extends Controller {
    async create(): Promise<void> {
        const rule = {
            email: { type: "string", required: true, message: "email不能为空" },
            password: { type: "string", required: true, message: "请输入密码" }
        }
        const data: any = this.ctx.request.query;
        await this.ctx.validate(rule, data);

        this.ctx.body = await this.ctx.service.users.create(data)
    }
}
