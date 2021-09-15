const axios = require('axios');
const settings = require('./settings.js');

module.exports = {
  getAll: (params, callback) => {
    axios
      .get(
        `${settings.url}/products?page=${params.page}&count=${params.count}`,
        settings.head
      )
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  info: (id = 1, callback) => {
    axios
      .get(`${settings.url}/products/${id}`, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  styles: (id = 1, callback) => {
    axios
      .get(`${settings.url}/products/${id}/styles`, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  related: (id = 1, callback) => {
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
