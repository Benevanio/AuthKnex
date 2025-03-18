class HomeController {
  async index(req, res) {
    res.send('Home page');
  }
}

module.exports = new HomeController();