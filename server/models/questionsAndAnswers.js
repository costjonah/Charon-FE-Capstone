const axios = require('axios');
const settings = require('./settings.js');

module.exports = {
  questions: (callback) => {
    axios
      .get(`${settings.url}/qa/questions`, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  answers: (id = 1, callback) => {
    axios
      .get(`${settings.url}/qa/questions/${id}/answers`, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  addQuestion: (callback) => {
    axios
      .post(`${settings.url}/qa/questions`, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  addAnswer: (id, callback) => {
    axios
      .post(`${settings.url}/qa/questions/${id}/answers`, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  markQuestionAsHelpful: (id, callback) => {
    axios
      .put(`${settings.url}/qa/questions/${id}/helpful`, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  reportQuestion: (id, callback) => {
    axios
      .put(`${settings.url}/qa/questions/${id}/report`, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  markAnswerAsHelpful: (id, callback) => {
    axios
      .put(`${settings.url}/qa/answers/${id}/helpful`, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  reportAnswer: (id, callback) => {
    axios
      .put(`${settings.url}/qa/answers/${id}/report`, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
};
