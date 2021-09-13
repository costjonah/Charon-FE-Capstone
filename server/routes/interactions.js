const models = require('../models/index');

module.exports = (app) => {
  app.post('/interactions', (req, res) => {
    models.products.log((err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(422).end();
      } else {
        res.status(201).send(responseData.data);
      }
    });
  });
};
