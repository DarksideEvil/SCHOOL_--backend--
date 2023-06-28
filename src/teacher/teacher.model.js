const mongoose = require("mongoose")

const teacherSchema = mongoose.Schema({
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subject",
        required: true
    },
    address: {
        type: String,
        minlength: 4,
        maxlength: 50,
        required: true
    },
    password: {
        type: String,
        minlength: 4,
        maxlength: 20,
        required: true
    },
    fullname: {
        type: String,
        minlength: 4,
        maxlength: 50,
        required: true
    },
    role: {
        type: String,
        minlength: 4,
        maxlength: 20,
        required: true
    },
    phone: {
        type: String,
        minlength: 9,
        maxlength: 13,
        required: true
    },
    desc: {
        type: String,
        minlength: 3,
        max: 500,
        default: null
    },
    age: {
        type: Number,
        default: null
    }
},{
    timestamps: true,
    versionKey: false
})

const teacherModel = mongoose.model('teacher', teacherSchema)

module.exports = teacherModel