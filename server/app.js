const express = require("express");
let products = require("./routes/products");
let reviews = require("./routes/reviews");
let questionsAndAnswers = require("./routes/questionsAndAnswers");
let cart = require("./routes/cart");
let interactions = require("./routes/interactions");
<<<<<<< HEAD
const path = require("path");
const test = require("./routes/test");
=======
>>>>>>> main

let app = express();

app.use(express.json());
<<<<<<< HEAD
app.use(express.static(path.resolve(__dirname, "../client/dist")));
=======
app.use(express.static(__dirname + "/../client/dist"));

app.get("/", (req, res) => {
  res.send("Under construction. Please come back later.");
});
>>>>>>> main

products(app);
reviews(app);
questionsAndAnswers(app);
cart(app);
interactions(app);
test(app);
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
});

module.exports = app;
