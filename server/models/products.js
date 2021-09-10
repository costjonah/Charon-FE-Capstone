const axios = require('axios');
const settings = require('./settings.js');

module.exports = {
  get: (callback) => {
    axios
      .get(`${settings.url}/products`, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  getById: (id = 1, callback) => {
    axios
      .get(`${settings.url}/products/${id}`, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  getStylesById: (id = 1, callback) => {
    axios
      .get(`${settings.url}/products/${id}/styles`, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  getRelatedById: (id = 1, callback) => {
    axios
      .get(`${settings.url}/products/${id}/related`, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
};
