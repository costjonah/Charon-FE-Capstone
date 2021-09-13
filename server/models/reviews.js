const axios = require('axios');
const settings = require('./settings.js');

module.exports = {
  list: (data, callback) => {
    axios
      .get(`${settings.url}/reviews?page=${data.page}&count=${data.count}&sort=${data.sort}&product_id=${data.product_id}`, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  getMetadata: (callback) => {
    axios
      .get(`${settings.url}/reviews/meta`, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  add: (callback) => {
    axios
      .post(`${settings.url}/reviews`, settings.head)
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
