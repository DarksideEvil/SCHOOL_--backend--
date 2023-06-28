const jwt = require("jsonwebtoken")
const bluebird = require("bluebird")
bluebird.promisifyAll(jwt)

module.exports = async function(req, res, next){
    const token = req.headers['authorization']
    if(token){  
        const baerer = token.split(" ")
        const decoded = jwt.verifyAsync(baerer[1], process.env.TOKEN_SECRET_KEY).then((respons)=>{
            req.user = respons
            return next()
        })
        .catch((err)=>{
            console.log(err)
            return res.status(403).json("token is not valid")
        })   
    }else {
        return res.status(403).json("token is not")
    }
}