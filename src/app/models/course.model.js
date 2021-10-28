const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Courses = new Schema({
  name: { type: String, maxlength: 50 },
  description: { type: String },
  image: { type: String },
  slug: { type: String, slug: 'name', unique: true },
  videoId: { type: String, required: true },
  level: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Course', Courses);
