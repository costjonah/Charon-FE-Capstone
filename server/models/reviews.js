const axios = require('axios');
const settings = require('./settings.js');

module.exports = {
  list: (id = 1, callback) => {
    axios
      .get(`${settings.url}/reviews?product_id=${id}`, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  getMetadata: (id = 1, callback) => {
    axios
      .get(`${settings.url}/reviews/meta?product_id=${id}`, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  add: (data, callback) => {
    console.log('LINE26:', data)
    axios
      .post(`${settings.url}/reviews`, data, settings.head)
      .then((res) => {

        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  markAsHelpful: (id = 1, callback) => {
    axios
      .put(`${settings.url}/reviews/${id}/helpful`, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  report: (id = 1, callback) => {
    axios
      .put(`${settings.url}/reviews/${id}/report`, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
};
