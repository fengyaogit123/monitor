"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    return mongoose.model('Project', new Schema({
        pName: { type: String },
        sendEmails: [{ type: Schema.Types.ObjectId, ref: 'Users' }],
        hosts: [{ type: String }],
        filter: [{ type: String }],
    }, {
        versionKey: false,
        timestamps: true
    }));
};
