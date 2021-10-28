const Courses = require('../models/course.model');
const { mongooseToObject } = require('../../util/mongoose');
class CourseController {
  // [GET] /course/:slug
  show(req, res, next) {
    Courses.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/show', { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  // [GET] 
  create(req, res, next) {
    res.render('courses/create');
  }

  // [POST] 
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Courses(formData);
    course.save()
      .then(() => res.redirect(`/`))
      .catch(next);

  }
}

module.exports = new CourseController();
