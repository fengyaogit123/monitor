"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Egg = require("egg");
class LogService extends Egg.Service {
    async create(log) {
        return await this.ctx.model.Log.create(log);
    }
    async list(params = {}) {
        const { QueryPage } = this.ctx.helper;
        const { size, pageNo } = params, query = __rest(params, ["size", "pageNo"]);
        const Log = this.ctx.model.Log;
        const result = await QueryPage({ size, pageNo }, () => {
            return Log.find(query).sort({ _id: -1 });
        });
        return result;
    }
    async dels(ids) {
        const Log = this.ctx.model.Log;
        await Log.remove({ _id: { $in: ids } });
    }
}
exports.default = LogService;
