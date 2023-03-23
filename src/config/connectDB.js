const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://thanhtritran951:t4Ss9pNINxy8UKVl@cluster0.8edyn9k.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
module.exports = mongoose