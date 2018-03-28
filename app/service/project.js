"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Egg = require("egg");
class ProjectService extends Egg.Service {
    async create(project) {
        return await this.ctx.model.Project.create(project);
    }
}
exports.default = ProjectService;
