import * as crypto from 'crypto';
const validators = require('async-validator');
const UUID = require('uuid/v1');
/**
 * @description 格式化
 * @param {String} fmt yyyy-MM-dd hh:mm:ss    
 */
Date.prototype.Format = function (fmt: string) {
    var o: any = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "H+": this.getHours(), //小时
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

//sha256加密
export function sha256(...args: string[]): string {
    function $encry(str: string) {
        const sha256 = crypto.createHash('sha256');
        sha256.update(str);
        return sha256.digest('hex');
    }
    return $encry(args.join(''));
}

//判断类型函数
export function is(): any {
    let is: any[any] = {
        types: ["Array", "Function", "Boolean", "Date", "Number", "Object", "RegExp", "String", "Window", "HTMLDocument"]
    };
    for (let i = 0, c; c = is.types[i++];) {
        is[c] = (function (type) {
            return function (obj: any) {
                if (type === 'Number' && isNaN(obj)) {
                    return false;
                }
                return Object.prototype.toString.call(obj) == "[object " + type + "]";
            }
        })(c);
    }
    return is;
}

//错误处理
export function error(ctx: any, obj = {}): void {
    const body = {
        code: 'server error',
        status: ctx.status,
        message: "error",
        ...obj
    };
    //未满足期望
    if (body.status == 417 || body.status == 412) {
        body.code = 'Expectation failed';
    }
    ctx.status = body.status;
    ctx.response.set("Content-Type", "application/json");
    ctx.res.end(JSON.stringify(body));
}
export function initUUID(): string {
    return UUID().replace(/-/g, '');
}
export async function QueryPage({ pageNo = 1, size = 20 }: { size: number, pageNo: number }, callback: Function): Promise<any> {
    pageNo = +pageNo;
    size = +size;
    if (!is().Number(pageNo)) pageNo = 1;
    if (!is().Number(size)) size = 20;
    if (pageNo < 1) pageNo = 1;
    if (size <= 0) size = 20;
    if (size > 1000) size = 1000;
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

export function validate(rules: Object, data: Object): Promise<{ status: number, message: string, code: string } | null> {
    return new Promise((resolve, reject) => {
        new validators(rules).validate(data, (errors: any, fields: any[]) => {
            if (errors) {
                resolve({
                    status: 417,
                    code: 'invalid param',
                    message: errors[0].message
                })
            }
            resolve()
        });
    })
}