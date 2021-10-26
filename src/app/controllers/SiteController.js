const Courses = require('../models/course.model');

class SiteController {
  // [GET] /
  index(req, res) {

    Courses.find({}, function(err, courses) {
      if(!err) return res.json(courses);
      res.status(400).json({ error: 'ERROR !!!' });
    })

    // res.render('home');
  }

  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
