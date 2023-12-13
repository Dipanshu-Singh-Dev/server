const { model, Schema } = require("mongoose");

const schema = Schema({
  fname: { required: true, type: String },
  lname: { required: true, type: String },
  email: { required: true, type: String, unique: true },
  dept: {
    required: true,
    type: String,
    enum: ["Tech", "Marketing", "Operations"],
  },
  salary: { required: true, type: Number },
  userId: { required: true, type: String },
});
module.exports = model("employee", schema);
