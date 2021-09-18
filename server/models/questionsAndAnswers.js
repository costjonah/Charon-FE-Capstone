const axios = require('axios');
const settings = require('./settings.js');

module.exports = {
  questions: (product_id, callback) => {
    axios
      .get(`${settings.url}/qa/questions/?product_id=${product_id}&count=100`, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  answers: (answer_id, callback) => {
    axios
      .get(`${settings.url}/qa/questions/${answer_id}/answers/?count=100`, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  addQuestion: (product_id, data, callback) => {
    axios
      .post(`${settings.url}/qa/questions?product_id=${product_id}`, data, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  addAnswer: (question_id, data, callback) => {
    axios
      .post(`${settings.url}/qa/questions/${question_id}/answers`, data, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        //console.log(test)
        callback(err);
      });
  },
  markQuestionAsHelpful: (question_id, callback) => {
    axios
      .put(`${settings.url}/qa/questions/${question_id}/helpful`, question_id, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  reportQuestion: (question_id, callback) => {
    axios
      .put(`${settings.url}/qa/questions/${question_id}/report`, question_id, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  markAnswerAsHelpful: (answer_id, callback) => {
    axios
      .put(`${settings.url}/qa/answers/${answer_id}/helpful`, answer_id, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  reportAnswer: (answer_id, callback) => {
    axios
      .put(`${settings.url}/qa/answers/${answer_id}/report`, answer_id, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
};
