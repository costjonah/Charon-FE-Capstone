const models = require('../models/index')

module.exports = (app) => {
  app.get('/products', (req, res) => {
    models.products.get(req, res);
    res.end();
  });
}
