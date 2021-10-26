class NewController {

  // [GET] /news
  index(req, res) {
    res.render('new');
  }

  // [GET] /new/:slug
  show(req, res) {
    res.send("New details");
  }

}

module.exports = new NewController;