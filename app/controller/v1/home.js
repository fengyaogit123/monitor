'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class HomeController extends egg_1.Controller {
    async index() {
        const rule = {
            userName: { type: "string", required: true, message: "请输入用户名" },
            password: { type: "string", required: true, message: "请输入密码" }
        };
        console.log(this.ctx.query);
        let result = await this.ctx.helper.validate(rule, this.ctx.query);
        if (result)
            return;
        console.log(result);
        this.ctx.body = 'hahah';
    }
}
exports.default = HomeController;
