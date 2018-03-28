'use strict';
const { error } = require('../app/utils/utils')
module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1516533966144_7741';
    // add your config here
    config.middleware = [];
    config.mongoose = {
        url: 'mongodb://127.0.0.1/monitor',
        options: {},
    };
    //web安全
    config.security = {
        csrf: {
            enable: false,
        },
    }
    //全局错误处理
    config.onerror = {
        all(err, ctx) {
            error(ctx, {
                code: err.code,
                message: err.message
            });
        }
    }
    config.multipart = {
        fileSize: '2mb',
    };
    return config;
};
