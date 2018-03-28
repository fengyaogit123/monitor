'use strict';
import { Controller } from 'egg';
import { ProjectRule } from '../../rule/project'
export default class ProjectController extends Controller {
    //创建项目
    async create(): Promise<void> {
        let result = await this.ctx.helper.validate(ProjectRule, this.ctx.query);
        if (result) return this.ctx.validate(result)
        this.ctx.body = await this.service.project.create(this.ctx.query)
    }
}