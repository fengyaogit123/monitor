import { Application } from "egg";
'use strict';
export default (app: Application) => {
    const { router, controller } = app;
    const { v1 } = controller
    const { project, log } = v1;
    router.get('/project/create', project.create );
    router.get('/log/create', log.create );
};