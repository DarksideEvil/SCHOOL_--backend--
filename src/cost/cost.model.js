const mongoose = require("mongoose")

const costSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 100
    },
    price: {
        type: Number,
        required: true
    },
},{
    timestamps: true,
    versionKey: false
})

const costModel = mongoose.model('cost', costSchema)

module.exports = costModel