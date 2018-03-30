'use strict';
import { Controller } from 'egg'
export default class LoginController extends Controller {
    async authCallback() {
        if (this.ctx.user && this.ctx.user.status) {
            this.ctx.status = this.ctx.user.status
            this.ctx.body = {
                ...this.ctx.user,
                code: 'Unauthorized'
            }
            return;
        }
        this.ctx.body = this.ctx.user
    }
    async loginOut(){
        this.ctx.logout();
        this.ctx.body=""
    }
}
