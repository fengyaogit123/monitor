//用户
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class UserController extends egg_1.Controller {
    async create() {
        const rule = {
            email: { type: "string", required: true, message: "email不能为空" },
            password: { type: "string", required: true, message: "请输入密码" }
        };
        const data = this.ctx.request.query;
        await this.ctx.validate(rule, data);
        this.ctx.body = await this.ctx.service.users.create(data);
    }
}
exports.default = UserController;
