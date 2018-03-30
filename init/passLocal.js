module.exports = (app) => {
    // 挂载 strategy
    app.passport.use(new LocalStrategy({
        passReqToCallback: true,
        usernameField: 'email',
        passwordField: 'password',
        session: false
    }, (req, email, password, done) => {
        const user = {
            provider: 'local',
            email,
            password,
        };
        app.passport.doVerify(req, user, done);
    }));

    // 处理用户信息
    app.passport.verify(async (ctx, user) => {
        let existUser = await ctx.service.users.login({
            email: user.email,
            password: user.password
        });
        if (existUser) {
            //生成token

            return existUser
        }
        return {
            status: 401,
            message: "用户名或密码不正确"
        }
    });
    // app.passport.deserializeUser(async (ctx, user) => {
    //     console.log(user)
    //     console.log('烦序列号')
    //     return user
    //     // if (user) {
    //     //     if (!auth_token) {
    //     //         return user;
    //     //     }

    //     //     const auth = auth_token.split('$$$$');
    //     //     const user_id = auth[0];
    //     //     user = await ctx.service.user.getUserById(user_id);

    //     //     if (!user) {
    //     //         return user;
    //     //     }

    //     //     if (ctx.app.config.admins.hasOwnProperty(user.loginname)) {
    //     //         user.is_admin = true;
    //     //     }
    //     // }

    //     // return user;
    // });
}