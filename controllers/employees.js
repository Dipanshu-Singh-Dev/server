const router = require("express").Router();
const model = require('../models/employees')

router.get('/',async(req,res)=>{
    const {order,filter,page=1} = req.query;
    const sorter = {};
    if (order) sorter[salary]=order; 
    const filterer = {};
    if(filter)filterer[department] = filter;
    const employees = await model
      .find(filterer)
      .sort(sorter)
      .limit(5)
      .skip((page - 1)*5);
      res.send(employees)
})
router.post('/',async(req,res)=>{
    const {fname,lname,email,dept,salary} = req.body;
    try{
        await model.create({fname,lname,email,dept,salary});
        res.send("created")
    }catch(err){
        console.log(err)
        res.send("failed")
    }
})
router.post("/update", async (req, res) => {
  const { fname, lname, email, dept, salary,id} = req.body;
  try {
    await model.findByIdAndUpdate(id,{ fname, lname, email, dept, salary });
    res.send("updated");
  } catch (err) {
    console.log(err);
    res.send("failed");
  }
});
router.delete('/',async(req,res)=>{
    const {id} = req.body;
    try {
      await model.findByIdAndDelete(id);
      res.send("deleted");
    } catch (err) {
      console.log(err);
      res.send("failed");
    }
})
module.exports = router;
