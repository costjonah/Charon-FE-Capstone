const models = require('../models/index')

module.exports = (app) => {
  app.get('/reviews/:id', (req, res) => {
    let id = req.params.id;
    models.reviews.list(id, (err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        res.send(responseData.data);
      }
    });
  });
  app.get('/reviews/meta/:id', (req, res) => {
    let id = req.params.id;
    models.reviews.getMetadata(id, (err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        res.send(responseData.data);
      }
    });
  });
  app.post('/reviews', (req, res) => {
    let body = req.body;
    models.reviews.add(body, (err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        res.status(201).send(body);
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
}
