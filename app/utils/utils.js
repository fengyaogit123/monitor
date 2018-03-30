"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
const validators = require('async-validator');
const UUID = require('uuid/v1');
/**
 * @description 格式化
 * @param {String} fmt yyyy-MM-dd hh:mm:ss
 */
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "H+": this.getHours(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
//sha256加密
function sha256(...args) {
    function $encry(str) {
        const sha256 = crypto.createHash('sha256');
        sha256.update(str);
        return sha256.digest('hex');
    }
    return $encry(args.join(''));
}
exports.sha256 = sha256;
//判断类型函数
function is() {
    let is = {
        types: ["Array", "Function", "Boolean", "Date", "Number", "Object", "RegExp", "String", "Window", "HTMLDocument"]
    };
    for (let i = 0, c; c = is.types[i++];) {
        is[c] = (function (type) {
            return function (obj) {
                if (type === 'Number' && isNaN(obj)) {
                    return false;
                }
                return Object.prototype.toString.call(obj) == "[object " + type + "]";
            };
        })(c);
    }
    return is;
}
exports.is = is;
//错误处理
function error(ctx, obj = {}) {
    const body = Object.assign({ code: 'server error', status: ctx.status, message: "error" }, obj);
    //未满足期望
    if (body.status == 417 || body.status == 412) {
        body.code = 'Expectation failed';
    }
    ctx.status = body.status;
    ctx.response.set("Content-Type", "application/json");
    ctx.res.end(JSON.stringify(body));
}
exports.error = error;
function initUUID() {
    return UUID().replace(/-/g, '');
}
exports.initUUID = initUUID;
async function QueryPage({ pageNo = 1, size = 20 }, callback) {
    pageNo = +pageNo;
    size = +size;
    if (!is().Number(pageNo))
        pageNo = 1;
    if (!is().Number(size))
        size = 20;
    if (pageNo < 1)
        pageNo = 1;
    if (size <= 0)
        size = 20;
    if (size > 1000)
        size = 1000;
    const count = await callback().count();
    const rows = await callback().skip((pageNo - 1) * size).limit(size);
    return {
        size,
        pageNo,
        pageSize: Math.ceil(count / size),
        count,
        rows
    };
}
exports.QueryPage = QueryPage;
function validate(rules, data) {
    return new Promise((resolve, reject) => {
        new validators(rules).validate(data, (errors, fields) => {
            if (errors) {
                resolve({
                    status: 417,
                    code: 'invalid param',
                    message: errors[0].message
                });
            }
            resolve();
        });
    });
}
exports.validate = validate;
