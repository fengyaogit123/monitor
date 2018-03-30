'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class ProjectController extends egg_1.Controller {
    //创建项目
    async create() {
        const rule = {
            pName: { type: "string", required: true, message: "请输入项目名称" },
        };
        await this.ctx.validate(rule, this.ctx.query);
        this.ctx.body = await this.service.project.create(this.ctx.query);
    }
    //获取全部
    async list() {
        this.ctx.body = await this.service.project.list(this.ctx.query);
    }
}
exports.default = ProjectController;
