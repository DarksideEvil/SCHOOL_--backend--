const {
    addGroup,
    getGroups,
    getGroup,
    editGroup,
    deleteGroup
} = require("./group.controller")

const {
    addGroupValidation,
    editGroupValidation,
    getGroupValidation,
    deleteGroupValidation
} = require("./group.validation")

const router = require('express').Router()
const authorization = require("../util/auth")



router.use(authorization)


router.route("/").post(addGroup)

router.route("/").get(getGroups)

router.route("/:id").get(getGroup)

router.route("/:id").put(editGroup)

router.route("/:id").delete(deleteGroup)


module.exports = router