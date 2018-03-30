import { Application } from "egg";
'use strict';
export default (app: Application) => {
    const { router, controller } = app;
    const { v1 } = controller
    const { project, log, home, login, users } = v1;
    router.get('/api/project/create', project.create);

    router.get('/api/log/create', log.create);
    router.get('/api/log/list', log.list);
    router.del('/api/log/dels', log.dels)

    // 登录校验
    router.post('/api/login', app.passport.authenticate('local', { successRedirect: '/api/login/authCallback' }));
    // 鉴权成功后的回调页面
    router.get('/api/login/authCallback', login.authCallback);

    router.get('/api/users/create', users.create)

    router.get('/', home.index);
};