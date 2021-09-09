const models = require('../models/index')

module.exports = (app) => {
  app.get('/products/:id', (req, res) => {
    models.products.get(req, res);
  });
}
