import * as Egg from 'egg'
export default class ProjectService extends Egg.Service {
    async create(project: Project): Promise<Project> {
        return await this.ctx.model.Project.create(project)
    }
    async list(params: any = {}): Promise<Array<Project>> {
        const { QueryPage } = this.ctx.helper;
        const { size, pageNo, ...query } = params;
        const Project = this.ctx.model.Project;

        const result = await QueryPage({ size, pageNo }, () => {
            return Project.find(query).sort({ _id: -1 })
        });

        return result;
    }
}
