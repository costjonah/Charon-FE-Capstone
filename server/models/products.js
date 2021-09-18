const axios = require("axios");
const settings = require("./settings.js");

const findProductStyles = async (id = 1) => {
  const res = await axios.get(
    `${settings.url}/products/${id}/styles`,
    settings.head
  );
  return res.data.results;
};
const findRelatedProducts = async (id = 1) => {
  const res = await axios.get(
    `${settings.url}/products/${id}/related`,
    settings.head
  );
  const relatedProductsIds = res.data;
  let relatedProducts = [];
  relatedProducts = await Promise.all(
    relatedProductsIds.map((id) => findProduct(id))
  );
  return relatedProducts;
};
const findProduct = async (id = 1) => {
  const res = await axios.get(`${settings.url}/products/${id}`, settings.head);
  const product = res.data;
  const productStyles = await findProductStyles(id);
  product.styles = productStyles;
  return product;
};
const findAllProducts = async () => {
  const res = await axios.get(`${settings.url}/products`, settings.head);
  const products = res.data;
  const relatedProducts = await Promise.all(
    products.map((product) => findRelatedProducts(product.id))
  );
  for (let i = 0; i < products.length; i++) {
    products[i].relatedProducts = relatedProducts[i];
  }
  return products;
};

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
