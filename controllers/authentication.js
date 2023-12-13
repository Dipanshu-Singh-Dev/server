const router = require('express').Router()
const model = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
router.post('/signup',async(req,res)=>{
    let {email,password} = req.body;
    try{
        bcrypt.hash(password, 2,async(err,hash)=>{
        await model.create({ email, password:hash });
        res.send("Signup successful");
        });
    }catch(err){
        console.log(err)
        res.send("Failed")
    }
})
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await model.findOne({ email });
    if(!user)res.send("Signup first")
    else{
    bcrypt.compare(password,user.password,(err,result)=>{
    const token = jwt.sign({id:user._id},process.env.secret)
    if (!result) res.send("Wrong password");
    res.send({message:"Signup successful",token});
})
    }
  } catch (err) {
    console.log(err);
    res.send("Failed");
  }
});
module.exports = router;