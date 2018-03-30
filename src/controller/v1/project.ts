'use strict';
import { Controller } from 'egg';
export default class ProjectController extends Controller {
    //创建项目
    async create(): Promise<void> {
        const rule = {
            pName: { type: "string", required: true, message: "请输入项目名称" },
        }
        await this.ctx.validate(rule, this.ctx.query);
        this.ctx.body = await this.service.project.create(this.ctx.query)
    }
}