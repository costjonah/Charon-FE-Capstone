const models = require('../models/index');

module.exports = (app) => {
  app.get('/reviews', (req, res) => {
    let queryData = {
      page: req.query.page || 1,
      count: req.query.count || 5,
      sort: req.query.text || 'newest',
      id: req.query.product_id,
    };
    models.reviews.list(queryData, (err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        res.send(responseData.data);
      }
    });
  });
  app.get('/reviews/meta', (req, res) => {
    models.reviews.getMetadata((err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        res.send(responseData.data);
      }
    });
  });
  app.post('/reviews', (req, res) => {
    models.reviews.add((err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        res.status(201).send(responseData.data);
      }
    });
  });
  app.put('/reviews/:review_id/helpful', (req, res) => {
    let id = req.params.review_id;
    models.reviews.markAsHelpful(id, (err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        res.status(204).send(responseData.data);
      }
    });
  });
  app.put('/reviews/:review_id/report', (req, res) => {
    let id = req.params.review_id;
    models.reviews.report(id, (err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        res.status(204).send(responseData.data);
      }
    });
  });
};
