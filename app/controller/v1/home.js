'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class HomeController extends egg_1.Controller {
    async index() {
        this.ctx.body = 'hahah';
    }
}
exports.default = HomeController;
