const axios = require('axios');
const settings = require('./settings.js');

module.exports = {
  list: (params, callback) => {
    axios
      .get(
        `${settings.url}/reviews?page=${params.page}&count=${params.count}&sort=${params.sort}&product_id=${params.id}`,
        settings.head
      )
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  getMetadata: (params, callback) => {
    axios
      .get(
        `${settings.url}/reviews/meta?product_id=${params.id}`,
        settings.head
      )
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  add: (data, callback) => {
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
