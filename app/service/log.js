"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Egg = require("egg");
class LogService extends Egg.Service {
    async create(log) {
        return await this.ctx.model.Log.create(log);
    }
}
exports.default = LogService;
