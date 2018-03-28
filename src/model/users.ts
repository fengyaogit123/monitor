import * as Egg from 'egg'
export default (app: Egg.Application) => {
    const mongoose = app.mongoose;
    return mongoose.model('Users',
        new mongoose.Schema({
            userName: { type: String },
            password: { type: String },
        },{
            versionKey: false,
            timestamps: true
        }));
};