import { Context } from 'egg'
export default (options: any) => {
    return async function (ctx: Context, next: Function) {
        const { user } = ctx;
        if (!user) {
            return ctx.throw(403, "请登录！")
        }
        await next();
    };
};