import * as Egg from 'egg'
export default (app: Egg.Application) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    return mongoose.model('Session',
        new Schema({
            key: String,
            value: String
        }, {
                versionKey: false,
            }));
};