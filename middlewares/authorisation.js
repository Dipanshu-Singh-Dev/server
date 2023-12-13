const jwt = require('jsonwebtoken')
module.exports = (req,res,next)=>{
    jwt.verify(req.body.token,process.env.secret,(err,decoded)=>{
        if(err)res.send("Unauthorized")
        else next()
    })
}