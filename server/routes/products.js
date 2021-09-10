const models = require('../models/index');

module.exports = (app) => {
  app.get('/products', (req, res) => {
    models.products.get((err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        res.send(responseData.data);
      }
    });
  });
  app.get('/products/:product_id', (req, res) => {
    let id = req.params.product_id;
    models.products.getById(id, (err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        res.send(responseData.data);
      }
    });
  });
  app.get('/products/:product_id/styles', (req, res) => {
    let id = req.params.product_id;
    models.products.getStylesById(id, (err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        res.send(responseData.data);
      }
    });
  });
  app.get('/products/:product_id/related', (req, res) => {
    let id = req.params.product_id;
    models.products.getRelatedById(id, (err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        res.send(responseData.data);
      }
    });
  });
};
