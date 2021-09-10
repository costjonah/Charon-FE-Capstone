const models = require('../models/index')

module.exports = (app) => {
  app.get('/reviews', (req, res) => {
    models.reviews.get((err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        res.send(responseData.data);
      }
    });
  });
  app.get('/reviews/meta', (req, res) => {
    models.reviews.getById((err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        res.send(responseData.data);
      }
    });
  });
  app.post('/reviews', (req, res) => {
    let id = req.params.product_id;
    models.reviews.getStylesById(id, (err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        res.status(201).send(responseData.data);
      }
    });
  });
  app.put('/reviews/:review_id/helpful', (req, res) => {
    let id = req.params.product_id;
    models.reviews.getRelatedById(id, (err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        res.status(204).send(responseData.data);
      }
    });
  });
  app.put('/reviews/:review_id/report', (req, res) => {
    let id = req.params.product_id;
    models.reviews.getRelatedById(id, (err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        res.status(204).send(responseData.data);
      }
    });
  });
}
