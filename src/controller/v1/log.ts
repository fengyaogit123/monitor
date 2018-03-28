'use strict';
import { Controller } from 'egg';
import { LogRule } from '../../rule/log'
export default class logController extends Controller {
    async create() {
        let result = await this.ctx.helper.validate(LogRule, this.ctx.query);
        if (result) return this.ctx.validate(result)
        this.ctx.body = await this.service.log.create(this.ctx.query)
    }
    async list(){
        this.ctx.body = await this.service.log.list()
    }
}