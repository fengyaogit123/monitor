'use strict';
import { Controller } from 'egg';
export default class HomeController extends Controller {
    async index(): Promise<void> {
        this.ctx.body = 'hahah'
    }
}