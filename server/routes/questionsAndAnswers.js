const models = require('../models/index');

module.exports = (app) => {
  app.get('/qa/questions/:product_id', (req, res) => {
    let product_id = req.params.product_id
    models.questionsAndAnswers.questions(product_id, (err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        res.send(responseData.data);
      }
    });
  });
  app.get('/qa/questions/:question_id/answers', (req, res) => {
    //console.log(req.params.question_id)
    let question_id = req.params.question_id;
    models.questionsAndAnswers.answers(question_id, (err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        res.send(responseData.data);
      }
    });
  });
  app.post('/qa/questions/:product_id', (req, res) => {
    let product_id = req.params.product_id
    //console.log(product_id)
    let data = req.body
    //console.log(data)
    models.questionsAndAnswers.addQuestion(product_id, data, (err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        console.log("test")
        res.status(201).send(responseData.data);
      }
    });
  });
  app.post('/qa/questions/:question_id/answers', (req, res) => {
    let question_id = req.params.question_id;
    let data = req.body
    models.questionsAndAnswers.addAnswer(question_id, data, (err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        res.status(201).send(responseData.data);
      }
    });
  });
  app.put('/qa/questions/:question_id/helpful', (req, res) => {
    let question_id = req.params.question_id;
    models.questionsAndAnswers.markQuestionAsHelpful(question_id, (err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        res.status(204).send(responseData.data);
      }
    });
  });
  app.put('/qa/questions/:question_id/report', (req, res) => {
    let question_id = req.params.question_id;
    models.questionsAndAnswers.reportQuestion(question_id, (err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        console.log('success')
        res.status(204).send(responseData.data);
      }
    });
  });
  app.put('/qa/answers/:answer_id/helpful', (req, res) => {
    let answer_id = req.params.answer_id;
    models.questionsAndAnswers.markAnswerAsHelpful(answer_id, (err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        res.status(204).send(responseData.data);
      }
    });
  });
  app.put('/qa/answers/:answer_id/report', (req, res) => {
    let answer_id = req.params.answer_id;
    models.questionsAndAnswers.reportAnswer(answer_id, (err, responseData) => {
      if (err) {
        console.error('Error: ', err);
        res.status(500).end();
      } else {
        res.status(204).send(responseData.data);
      }
    });
  });
};
