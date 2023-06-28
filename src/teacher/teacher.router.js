const {
    addTeacher,
    getTeachers,
    getTeacher,
    editTeacher,
    deleteTeacher
} = require("./teacher.controller")


const {
    addTeacherValidation,
    editTeacherValidation,
    getTeacherValidation,
    deleteTeacherValidation
} = require("./teacher.validation")

const router = require('express').Router()
const authorization = require("../util/auth")



router.use(authorization)

router.route("/").post(addTeacher)

router.route("/").get(getTeachers)

router.route("/:id").get(getTeacher)

router.route("/:id").put(editTeacher)

router.route("/:id").delete(deleteTeacher)


module.exports = router