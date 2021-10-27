const Courses = require('../models/course.model');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
  // [GET] /
  index(req, res, next) {
    // Courses.find({}, function(err, courses) {
    //   if(!err) return res.json(courses);
    //   res.status(400).json({ error: 'ERROR !!!' });
    // })

    Courses.find({})
      .then((courses) => res.render('home', { title: 'Khoa Hoc', data: multipleMongooseToObject(courses)}))
      .catch(next)
    // res.render('home');
  }

  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
