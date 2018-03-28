// app/service/user.js
import * as Egg from 'egg'
import * as utils from '../utils/utils'
export default class UserService extends Egg.Service {
    /**
     * @description 新增用户
     */
    async create(user: User): Promise<User> {
        const findUser = await this.findByName(user.username);
        if (findUser.length == 0) {
            user.id = utils.initUUID();
            user.password = utils.sha256(user.password, user.password, 'fy');
            return await this.ctx.model.Users.create(user);
        }
        return this.ctx.throw(412, "用户已存在")
    }
    /**
     * @description 根据username查找user
     */
    async findByName(username: string): Promise<User[]> {
        return await this.ctx.model.Users.findAll({
            attributes: ['username'],
            where: {
                username
            }
        });
    }
    /**
     * @description 根据phone查找user
     */
    async findByPhone(phone: string): Promise<User> {
        return await this.ctx.model.Users.findAll({
            attributes: ['phone'],
            where: {
                phone
            }
        });
    }
    /**
     * @description 根据用户名密码登录
     */
    async findByLogin({ username = '', password = '' }): Promise<User[]> {
        return await this.ctx.model.Users.findAll({
            attributes: { exclude: ['password'] },
            where: {
                username,
                password
            }
        });
    }
    /**
     * @description 登录
     */
    async login(): Promise<User> {
        let user = this.ctx.request.body;
        user.password = utils.sha256(user.password, user.password, 'fy');
        const findUser = await this.findByLogin(user);
        if (findUser.length > 0) {
            return findUser[0];
        }
        return this.ctx.throw(412, "用户名或密码不正确")
    }
}
