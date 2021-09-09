const models = require('../models/index')

module.exports = (app) => {
  app.get('/', (req, res) => {
    models.questionsAndAnswers.get(req, res);
  });
}
