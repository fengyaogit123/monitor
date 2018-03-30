module.exports = (app) => {
    app.sessionStore = {
        async get(key) {
            const model = await app.model.Token.findOne({ key });
            if (!model) return null;
            if(model.outTime<Date.now()){
                model.remove()
                return null;
            }
            return model
        },
        async set(key, value, maxAge) {
            if (!maxAge) maxAge = 5 * 60 * 60 * 1000;
            await app.model.Token.create({
                key,
                value,
                outTime: maxAge + Date.now()
            })
        },
        async destroy(key) {
            await app.model.Token.remove({key})
        }
    }
}