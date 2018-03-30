'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class LoginController extends egg_1.Controller {
    async authCallback() {
        if (this.ctx.user && this.ctx.user.status) {
            this.ctx.status = this.ctx.user.status;
            this.ctx.body = Object.assign({}, this.ctx.user, { code: 'Unauthorized' });
            return;
        }
        this.ctx.body = this.ctx.user;
    }
    async loginOut() {
        this.ctx.logout();
        this.ctx.body = "";
    }
}
exports.default = LoginController;
