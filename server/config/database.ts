import mongoose from 'mongoose'

const URI = process.env.MONGO_DB

mongoose.connect(`${URI}`, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if(err) throw err
    console.log('DB Connected')
})