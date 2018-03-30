"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// app/service/user.js
const Egg = require("egg");
const utils = require("../utils/utils");
class UserService extends Egg.Service {
    /**
     * @description 新增用户
     */
    async create(user) {
        const findUser = await this.findByEmail(user.email);
        if (!findUser) {
            user.password = utils.sha256(user.password, user.password, 'mon');
            return await this.ctx.model.Users.create(user);
        }
        return this.ctx.throw(412, "用户不存在或密码不正确！");
    }
    /**
     * @description 根据username查找user
     */
    async findByEmail(email) {
        return await this.ctx.model.Users.findOne({ email });
    }
    /**
     * @description 根据用户名密码登录
     */
    async findByLogin(query) {
        return await this.ctx.model.Users.findOne(query);
    }
    /**
     * @description 登录
     */
    async login(query) {
        query.password = this.ctx.helper.sha256(query.password, query.password, 'mon');
        return await this.findByLogin(query);
    }
}
exports.default = UserService;
