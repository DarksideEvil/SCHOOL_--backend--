const {
    addCost,
    getCosts,
    getCost,
    editCost,
    deleteCost
} = require("./cost.controller")

const {
    addCostValidation,
    editCostValidation,
    getCostValidation,
    deleteCostValidation
} = require("./cost.validation")

const router = require('express').Router()
const authorization = require("../util/auth")



router.use(authorization)

router.route("/").post(addCost)

router.route("/").get(getCosts)

router.route("/:id").get(getCost)

router.route("/:id").put(editCost)

router.route("/:id").delete(deleteCost)


module.exports = router