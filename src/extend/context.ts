import * as utils from '../utils/utils'
module.exports = {
    async validate(rule: any, data: any) {
        let result: any = await utils.validate(rule, data)
        result && this.throw(result.status, result.message)
    }
};