module.exports = {
  index: function(req, res, next) {
    res.render('home/index');
  },
  loja: function(req, res, next) {
    res.render('home/loja');
  },
  produtos: function(req, res, next) {
    res.render('home/produtos');
  },
  sobre: function(req, res, next) {
    res.render('home/sobre');
  }
};
