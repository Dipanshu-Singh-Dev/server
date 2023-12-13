const {model,Schema} = require('mongoose')

const schema = Schema({
  email: { required: true, unique: true, type: String },
  password: { required: true, type: String },
});
module.exports = model('user',schema)