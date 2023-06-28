const router = require('express').Router()
const teacherRouter = require("./teacher/teacher.router")
const subjectRouter = require("./subject/subject.router")
const authRouter = require("./auth/auth.router")
const studentRouter = require("./student/student.router")
const costRouter = require("./cost/cost.router")
const groupRouter = require("./group/group.router")
const reportRouter = require('./report/report.router')

router.use("/auth" , authRouter)
router.use("/teacher" , teacherRouter)
router.use("/subject" , subjectRouter)
router.use("/student" , studentRouter)
router.use("/cost" , costRouter)
router.use("/group" , groupRouter)
router.use("/reports" , reportRouter)

module.exports = router