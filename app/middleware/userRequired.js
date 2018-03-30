"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (options) => {
    return async function (ctx, next) {
        const { user } = ctx;
        if (!user) {
            return ctx.throw(403, "请登录！");
        }
        await next();
    };
};
