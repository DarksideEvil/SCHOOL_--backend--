const mongoose = require("mongoose")

const groupSchema = mongoose.Schema({
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "teacher",
        required: true
    },
    date: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
},{
    timestamps: true,
    versionKey: false
})

const groupModel = mongoose.model('group', groupSchema)

module.exports = groupModel