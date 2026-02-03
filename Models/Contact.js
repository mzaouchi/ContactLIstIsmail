const mongoose = require('mongoose')


const contactSchema = mongoose.Schema(
    {
        name : String,
        age : Number,
        email : {type : String, unique : true, required : true}
    }
)

module.exports = mongoose.model('fendi',contactSchema)