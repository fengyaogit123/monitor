"use strict";
module.exports = {
    validate(obj) {
        const body = Object.assign({ code: 'server error', status: this.ctx.status, message: "error" }, obj);
        //未满足期望
        if (body.status == 417 || body.status == 412) {
            body.code = 'Expectation failed';
        }
        this.ctx.status = body.status;
        this.ctx.body = body;
    }
};
