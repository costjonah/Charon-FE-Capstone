const axios = require('axios');
const settings = require('./settings.js');

module.exports = {
  getCart: (callback) => {
    axios
      .get(`${settings.url}/cart`, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  addToCart: (id = 1, callback) => {
    axios
      .post(`${settings.url}/cart`, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
};
