const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Employee = new Schema({
  name: {
    type: String
  },
  age: {
    type: String
  },
},{
    collection: 'employee'
});

module.exports = mongoose.model('Employee', Employee);