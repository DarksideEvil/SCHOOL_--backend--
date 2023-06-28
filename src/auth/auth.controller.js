const jwt = require("jsonwebtoken")

const authAdminController = async (req, res) => {
    try{
        const {phone, password} = req.body
        if(phone == process.env.LOGIN && password == process.env.PASSWORD){
            let token = jwt.sign(
                {
                    _id: null,
                    fullname: "ADMIN",
                    role: 'admin'
                },
                process.env.TOKEN_SECRET_KEY,
                {
                    algorithm: "HS256",
                    expiresIn: process.env.TOKEN_EXPIRESIN
                }
                )
            return res.status(200).json({jwt_key: token})
        }else {
            return res.status(403).json("login/password false")
        }      
    } catch(err){
        return res.status(400).json(err)
    }
}

const authBossController = async (req, res) => {
    try{
        const {phone, password} = req.body
        if(phone == process.env.LOGIN_BOSS && password == process.env.PASSWORD_BOSS){
            let token = jwt.sign(
                {
                    _id: null,
                    fullname: "BOSS",
                    role: 'boss'
                },
                process.env.TOKEN_SECRET_KEY,
                {
                    algorithm: "HS256",
                    expiresIn: process.env.TOKEN_EXPIRESIN
                }
                )
            return res.status(200).json({jwt_key: token})
        }else {
            return res.status(403).json("login/password false")
        }      
    } catch(err){
        return res.status(400).json(err)
    }
}


module.exports = {
    authAdminController,
    authBossController
}