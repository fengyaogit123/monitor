"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    return mongoose.model('Session', new Schema({
        key: String,
        value: String
    }, {
        versionKey: false,
    }));
};
