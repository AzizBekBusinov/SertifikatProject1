const mongoose = require('mongoose');

module.exports = () => {

    mongoose.connect('mongodb+srv://Azizbek:businov2004@cluster0.exyqd.mongodb.net/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true
    });

    const db = mongoose.connection

    db.on('open', () => {
        console.log(`Mongo DB running`);
    })

    db.on('error', (err) => {
        console.log(`Mongo DB ERROR running ...`, err);
    })

}