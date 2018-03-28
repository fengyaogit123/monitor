"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    const mongoose = app.mongoose;
    return mongoose.model('Users', new mongoose.Schema({
        userName: { type: String },
        password: { type: String },
    }, {
        versionKey: false,
        timestamps: true
    }));
};
