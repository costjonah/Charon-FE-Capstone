const models = require('../models/index');

module.exports = (app) => {
  app.get('/reviews', (req, res) => {
    let queryParams = {
      page: req.query.page || 1,
      count: req.query.count || 5,
      sort: req.query.sort || 'newest',
      id: req.query.product_id,
    };
    models.reviews.list(queryParams, (err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        res.send(responseData.data);
      }
    });
  });
  app.get('/reviews/meta', (req, res) => {
    let queryData = {
      id: req.query.product_id,
    };
    models.reviews.getMetadata(queryData, (err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        res.send(responseData.data);
      }
    });
  });
  app.post('/reviews', (req, res) => {
    let bodyData = {
      product_id: req.body.product_id,
      rating: req.body.rating,
      summary: req.body.summary,
      body: req.body.body,
      recommend: req.body.recommend,
      name: req.body.name,
      email: req.body.email,
      photos: req.body.photos,
      characteristics: req.body.characteristics,
    };
    models.reviews.add(bodyData, (err, responseData) => {
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
        console.error('Error: ', err.response.status);
        console.error('Error: ', err.response.data);
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
        console.error('Error: ', err.response.status);
        console.error('Error: ', err.response.data);
        res.status(500).end();
      } else {
        res.status(204).send(responseData.data);
      }
    });
  });
};
