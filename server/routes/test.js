const productList = require("../data/productList");

module.exports = (app) => {
  app.get("/api/test/products", (req, res) => {
    return res.json(productList);
  });

  app.get("/api/test/products/:id", (req, res) => {
    let product = null;
    for (const p of productList.productList) {
      if (p.id == req.params.id) {
        product = p;
      }
    }

    return res.json({
      code: 200,
      msg: "ok",
      product: product,
    });
  });

  app.get("/api/test/currentProduct", (req, res) => {
    return res.json({
      code: 200,
      msg: "ok",
      currentProduct: productList.data[0],
    });
  });
};
