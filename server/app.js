const express = require('express');
let products = require('./routes/products');
let reviews = require('./routes/reviews');
let questionsAndAnswers = require('./routes/questionsAndAnswers');
let cart = require('./routes/cart');
let interactions = require('./routes/interactions');
const test = require('./routes/test');

let app = express();

app.use(express.json());
app.use(express.static('client'));

app.get('/', (req, res) => {
  res.send('Under construction. Please come back later.');
});

products(app);
reviews(app);
questionsAndAnswers(app);
cart(app);
interactions(app);
test(app);

module.exports = app;
