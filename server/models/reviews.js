const axios = require("axios");
const settings = require("./settings.js");

module.exports = {
  list: (productID, callback) => {
    axios
      .get(`${settings.url}/reviews?product_id=${productID}`, settings.head)
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
