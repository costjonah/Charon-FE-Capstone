const models = require("../models/index");

module.exports = (app) => {
  app.get("/qa/questions", (req, res) => {
    models.questionsAndAnswers.questions((err, responseData) => {
      if (err) {
        console.error("Error: ", err);
        res.status(500).end();
      } else {
        res.send(responseData.data);
      }
    });
  });
  app.get("/qa/questions/:question_id/answers", (req, res) => {
    let id = req.params.question_id;
    models.questionsAndAnswers.answers(id, (err, responseData) => {
      if (err) {
        console.error("Error: ", err);
        res.status(500).end();
      } else {
        res.send(responseData.data);
      }
    });
  });
  app.post("/qa/questions", (req, res) => {
    models.questionsAndAnswers.addQuestion((err, responseData) => {
      if (err) {
        console.error("Error: ", err);
        res.status(500).end();
      } else {
        res.status(201).send(responseData.data);
      }
    });
  });
  app.post("/qa/questions/:question_id/answers", (req, res) => {
    let id = req.params.question_id;
    models.questionsAndAnswers.addAnswer(id, (err, responseData) => {
      if (err) {
        console.error("Error: ", err);
        res.status(500).end();
      } else {
        res.status(201).send(responseData.data);
      }
    });
  });
  app.put("/qa/questions/:question_id/helpful", (req, res) => {
    let id = req.params.question_id;
    models.questionsAndAnswers.markQuestionAsHelpful(
      id,
      (err, responseData) => {
        if (err) {
          console.error("Error: ", err);
          res.status(500).end();
        } else {
          res.status(204).send(responseData.data);
        }
      }
    );
  });
  app.put("/qa/questions/:question_id/report", (req, res) => {
    let id = req.params.question_id;
    models.questionsAndAnswers.reportQuestion(id, (err, responseData) => {
      if (err) {
        console.error("Error: ", err);
        res.status(500).end();
      } else {
        res.status(204).send(responseData.data);
      }
    });
  });
  app.put("/qa/answers/:answer_id/helpful", (req, res) => {
    let id = req.params.answer_id;
    models.questionsAndAnswers.markAnswerAsHelpful(id, (err, responseData) => {
      if (err) {
        console.error("Error: ", err);
        res.status(500).end();
      } else {
        res.status(204).send(responseData.data);
      }
    });
  });
  app.put("/qa/answers/:answer_id/report", (req, res) => {
    let id = req.params.answer_id;
    models.questionsAndAnswers.reportAnswer(id, (err, responseData) => {
      if (err) {
        console.error("Error: ", err);
        res.status(500).end();
      } else {
        res.status(204).send(responseData.data);
      }
    });
  });
};
