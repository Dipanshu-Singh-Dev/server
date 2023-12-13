const express = require('express');
const app = express();
const connection = require('./configs/db');
const authentication = require("./controllers/authentication");
const employees = require('./controllers/employees');
const authorisation = require('./middlewares/authorisation')
app.use(express.json());
require('dotenv').config();
try{
 connection.then(res=>app.listen(3000, () => {
    console.log(`Server is running`);
  }))
}catch(err){
  console.log(err);
}
app.use('/authentication',authentication)
app.use("/employees", authorisation, employees);