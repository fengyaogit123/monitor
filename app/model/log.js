"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    return mongoose.model('Log', new mongoose.Schema({
        project: { type: Schema.Types.ObjectId, ref: 'Project' },
        browserVer: String,
        browserName: String,
        phoneSystemType: String,
        phoneSystemVer: String,
        phoneName: String,
        isSolve: Boolean,
        errorRank: Number,
        errorInfo: [{
                type: String,
                target: String,
                time: String
            }],
        url: String,
        route: String,
        details: String,
        errorDetails: String,
    }, {
        versionKey: false,
        timestamps: true
    }));
};
