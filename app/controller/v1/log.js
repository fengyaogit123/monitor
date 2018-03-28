'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const log_1 = require("../../rule/log");
class logController extends egg_1.Controller {
    async create() {
        let result = await this.ctx.helper.validate(log_1.LogRule, this.ctx.query);
        if (result)
            return this.ctx.validate(result);
        this.ctx.body = await this.service.log.create(this.ctx.query);
    }
    async list() {
        this.ctx.body = await this.service.log.list();
    }
}
exports.default = logController;
