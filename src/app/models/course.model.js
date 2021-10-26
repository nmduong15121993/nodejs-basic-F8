const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Courses = new Schema({
  name: { type: String, maxlength: 50 },
  description: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Courses);
