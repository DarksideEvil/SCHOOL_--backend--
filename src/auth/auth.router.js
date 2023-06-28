const {
    authAdminController,
    authBossController
} = require("./auth.controller")

const router = require('express').Router()

router.route("/admin").post(authAdminController)

router.route("/boss").post(authBossController)

module.exports = router