'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    const { router, controller, middleware } = app;
    const { v1 } = controller;
    const { project, log, home, login, users } = v1;
    const userRequired = middleware.userRequired();
    router.get('/api/project/create', userRequired, project.create);
    router.get('/api/project/list', userRequired, project.list);
    router.get('/api/log/create', log.create);
    router.get('/api/log/list', userRequired, log.list);
    router.del('/api/log/dels', userRequired, log.dels);
    // 登录校验
    router.post('/api/login', app.passport.authenticate('local', { successRedirect: '/api/login/authCallback' }));
    router.post('/api/loginOut', login.loginOut);
    // 鉴权成功后的回调页面
    router.get('/api/login/authCallback', login.authCallback);
    router.get('/api/users/create', users.create);
    router.get('/', home.index);
};
