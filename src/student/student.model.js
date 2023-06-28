const mongoose = require("mongoose")

const studentSchema = mongoose.Schema({
    fullname: {
        type: String,
        minlength: 4,
        maxlength: 50,
        required: true
    },
    phone: {
        type: String,
        minlength: 9,
        maxlength: 9,
        default: null
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "group",
        required: true
    },
    payments: {
        type: [
            {
                date: String,
                price: Number
            }
        ]
    }
},{
    timestamps: true,
    versionKey: false
})

const studentModel = mongoose.model('student', studentSchema)

module.exports = studentModel