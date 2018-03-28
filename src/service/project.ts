import * as Egg from 'egg'
export default class ProjectService extends Egg.Service {
    async create(project: Project): Promise<Project> {
        return await this.ctx.model.Project.create(project)
    }
}
