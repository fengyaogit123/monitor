import * as Egg from 'egg'
export default (app: Egg.Application) => {
    const mongoose = app.mongoose;
    return mongoose.model('Users',
        new mongoose.Schema({
            email: String,
            userName: String,
            password: String,
        }, {
                versionKey: false,
                timestamps: true
            }));
};