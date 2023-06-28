const {Joi, validate} = require("express-validation")

const addTeacherValidation = validate({
    body: Joi.object({
        fullname: Joi.string().min(3).required(),
        login: Joi.string().min(3).required(),
        password: Joi.string().min(3).required(),
        phone: Joi.string().min(9).max(13).required(),
        role: Joi.string()
	}).options({allowUnknown: false})
});

const editTeacherValidation = validate({
    params: Joi.object({
        id: Joi.string().required()
    }).options({allowUnknown: false}),
    body: Joi.object({
        fullname: Joi.string(),
        login: Joi.string(),
        password: Joi.string(),
        phone: Joi.string()
	}).options({allowUnknown: false})
});

const getTeacherValidation = validate({
    params: Joi.object({
        id: Joi.string().required()
    }).options({allowUnknown: false}),
});

const deleteTeacherValidation = validate({
    params: Joi.object({
        id: Joi.string().required()
    }).options({allowUnknown: false}),
});

module.exports = {
    addTeacherValidation,
    editTeacherValidation,
    getTeacherValidation,
    deleteTeacherValidation
}