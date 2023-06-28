const {
    byGroupStudent,
    byGroupPrice,
    byCosts
} = require("./report.controller")


const router = require('express').Router()
const authorization = require("../util/auth")


router.route("/cost").get(byCosts)

router.use(authorization)
// throw new Error(`toifalarni olishda kutilmagan xatolik ro'y berdi!`)
router.route("/group").get(byGroupStudent)

router.route("/groupPrice").get(byGroupPrice)




module.exports = router