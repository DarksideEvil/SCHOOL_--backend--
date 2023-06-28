const {
    addSubject,
    getSubjects,
    getSubject,
    editSubject,
    deleteSubject
} = require("./subject.controller")

const {
    addSubjectValidation,
    editSubjectValidation,
    getSubjectValidation,
    deleteSubjectValidation
} = require("./subject.validation")

const router = require('express').Router()
const authorization = require("../util/auth")



router.use(authorization)

router.route("/").post(addSubject)

router.route("/").get(getSubjects)

router.route("/:id").get(getSubject)

router.route("/:id").put(editSubject)

router.route("/:id").delete(deleteSubject)


module.exports = router