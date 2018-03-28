//用户
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class UserController extends egg_1.Controller {
    async create() {
        const rule = {
            userName: { type: "string", required: true, message: "请输入用户名" },
            password: { type: "string", required: true, message: "请输入密码" }
        };
        let result = this.ctx.helper.validate(rule, this.ctx.query);
        console.log(result);
        this.ctx.body = await this.ctx.model.Users.find(this.ctx.query);
        // this.ctx.body = await this.service.users.create(this.ctx.request.body);
    }
}
exports.default = UserController;
