"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    return mongoose.model('Token', new Schema({
        key: String,
        outTime: Date,
        value: { type: Schema.Types.ObjectId, ref: 'Users' }
    }, {
        versionKey: false,
    }));
};
