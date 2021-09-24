const express = require("express");
const expressStaticGzip = require("express-static-gzip");
const path = require("path");
let products = require("./routes/products");
let reviews = require("./routes/reviews");
let questionsAndAnswers = require("./routes/questionsAndAnswers");
let cart = require("./routes/cart");
let interactions = require("./routes/interactions");

let app = express();

app.use(express.json());
app.use(expressStaticGzip(path.join(__dirname, "../client/dist")));
app.use(express.static(path.join(__dirname, "../client/dist")));

products(app);
reviews(app);
questionsAndAnswers(app);
cart(app);
interactions(app);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

module.exports = app;
