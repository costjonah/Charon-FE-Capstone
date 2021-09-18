const express = require("express");
let products = require("./routes/products");
let reviews = require("./routes/reviews");
let questionsAndAnswers = require("./routes/questionsAndAnswers");
let cart = require("./routes/cart");
let interactions = require("./routes/interactions");
const path = require("path");
const test = require("./routes/test");

let app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/dist")));

products(app);
reviews(app);
questionsAndAnswers(app);
cart(app);
interactions(app);
test(app);
app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
});

module.exports = app;
