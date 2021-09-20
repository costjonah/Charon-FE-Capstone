const axios = require("axios");
const settings = require("./settings.js");

module.exports = {
  getAll: async function (cb) {
    try {
      const products = await findAllProducts();
      cb(null, {
        data: products,
      });
    } catch (err) {
      cb(err, []);
    }
    // axios
    //   .get(`${settings.url}/products`, settings.head)
    //   .then((res) => {
    //     callback(null, res);
    //   })
    //   .catch((err) => {
    //     callback(err);
    //   });
  },
  info: async function (id = 1, cb) {
    try {
      const product = await findProduct(id);
      cb(null, {
        data: product,
      });
    } catch (err) {
      cb(err, null);
    }
    // axios
    //   .get(`${settings.url}/products/${id}`, settings.head)
    //   .then((res) => {
    //     callback(null, res);
    //   })
    //   .catch((err) => {
    //     callback(err);
    //   });
  },
  styles: function (id = 1, callback) {
    axios
      .get(`${settings.url}/products/${id}/styles`, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  related: function (id = 1, callback) {
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
