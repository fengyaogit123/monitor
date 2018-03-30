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
        const existUser = this.ctx.user;
        //生成token
        const token = this.ctx.helper.sha256(`${Date.now()}`, existUser.email, existUser.password);
        //保存token到db 并设置半小时过期时间
        this.ctx.body = {
            token,
            data: existUser
        };
    }
}
