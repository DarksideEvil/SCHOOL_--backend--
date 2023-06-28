const mongoose = require("mongoose")

const subjectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 100,
        unique: true
    },
    desc: {
        type: String,
        default: null
    },
},{
    timestamps: true,
    versionKey: false
})

const subjectModel = mongoose.model('subject', subjectSchema)

module.exports = subjectModel