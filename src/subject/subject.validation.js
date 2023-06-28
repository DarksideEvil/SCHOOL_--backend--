const {Joi, validate} = require("express-validation")

const addSubjectValidation = validate({
    body: Joi.object({
        title: Joi.string().min(3).required(),
        desc: Joi.string().min(3),
	}).options({allowUnknown: false})
});

const editSubjectValidation = validate({
    params: Joi.object({
        id: Joi.string().required()
    }).options({allowUnknown: false}),
    body: Joi.object({
        title: Joi.string(),
        desc: Joi.string(),
	}).options({allowUnknown: false})
});

const getSubjectValidation = validate({
    params: Joi.object({
        id: Joi.string().required()
    }).options({allowUnknown: false}),
});

const deleteSubjectValidation = validate({
    params: Joi.object({
        id: Joi.string().required()
    }).options({allowUnknown: false}),
});

module.exports = {
    addSubjectValidation,
    editSubjectValidation,
    getSubjectValidation,
    deleteSubjectValidation
}