const {Joi, validate} = require("express-validation")

const addStudentValidation = validate({
    body: Joi.object({
        fullname: Joi.string().min(3).required(),
        login: Joi.string().min(3).required(),
        password: Joi.string().min(3).required(),
        role: Joi.string().required(),
        phone: Joi.string().min(9).max(13).required(),
        score: Joi.array() 
	}).options({allowUnknown: false})
});

const editStudentValidation = validate({
    params: Joi.object({
        id: Joi.string().required()
    }).options({allowUnknown: false}),
    body: Joi.object({
        fullname: Joi.string(),
        login: Joi.string(),
        password: Joi.string(),
	}).options({allowUnknown: false})
});

const getStudentValidation = validate({
    params: Joi.object({
        id: Joi.string().required()
    }).options({allowUnknown: false}),
});

const deleteStudentValidation = validate({
    params: Joi.object({
        id: Joi.string().required()
    }).options({allowUnknown: false}),
});

module.exports = {
    addStudentValidation,
    editStudentValidation,
    getStudentValidation,
    deleteStudentValidation
}