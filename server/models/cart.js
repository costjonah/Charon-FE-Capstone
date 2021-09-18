const axios = require("axios");
const settings = require("./settings.js");

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
  addToCart: (data, callback) => {
    axios
      .post(`${settings.url}/cart`, data, settings.head)
      .then((res) => {
        console.log("LINE19", res);
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
};
