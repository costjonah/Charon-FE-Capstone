const models = require('../models/index');

module.exports = (app) => {
  app.get('/cart', (req, res) => {
    models.cart.getCart((err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        res.send(responseData.data);
      }
    });
  });
  app.post('/cart', (req, res) => {
    let id = req.params.product_id;
    models.cart.addToCart(id, (err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        res.status(201).send(responseData.data);
      }
    });
  });
};
