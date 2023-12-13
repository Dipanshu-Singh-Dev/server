require('dotenv').config()
const mongoose = require('mongoose')
module.exports = mongoose.connect(process.env.connectionString).then(res=>console.log("connected to db")).catch(err=>console.log(err))