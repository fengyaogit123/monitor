'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const project_1 = require("../../rule/project");
class ProjectController extends egg_1.Controller {
    //创建项目
    async create() {
        let result = await this.ctx.helper.validate(project_1.ProjectRule, this.ctx.query);
        if (result)
            return this.ctx.validate(result);
        this.ctx.body = await this.service.project.create(this.ctx.query);
    }
}
exports.default = ProjectController;
