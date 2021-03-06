"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    const mongoose = app.mongoose;
    return mongoose.model('Users', new mongoose.Schema({
        email: String,
        userName: String,
        password: String,
    }, {
        versionKey: false,
        timestamps: true
    }));
};
