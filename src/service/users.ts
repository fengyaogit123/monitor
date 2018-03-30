// app/service/user.js
import * as Egg from 'egg'
import * as utils from '../utils/utils'
export default class UserService extends Egg.Service {
    /**
     * @description 新增用户
     */
    async create(user: Users): Promise<Users> {
        const findUser = await this.findByEmail(user.email);
        if (!findUser) {
            user.password = utils.sha256(user.password, user.password, 'mon');
            return await this.ctx.model.Users.create(user);
        }
        return this.ctx.throw(412, "用户不存在或密码不正确！")
    }
    /**
     * @description 根据username查找user
     */
    async findByEmail(email: string): Promise<Users> {
        return await this.ctx.model.Users.findOne({ email });
    }
    /**
     * @description 根据用户名密码登录
     */
    async findByLogin(query: { email: String, password: String }): Promise<Users> {
        return await this.ctx.model.Users.findOne(query);
    }
    /**
     * @description 登录
     */
    async login(query: { email: string, password: string }): Promise<Users> {
        query.password = this.ctx.helper.sha256(query.password, query.password, 'mon');
        return await this.findByLogin(query);
    }
}
