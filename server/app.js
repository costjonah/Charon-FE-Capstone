const express = require('express');
let products = require('./routes/products');
let reviews = require('./routes/reviews');
let questionsAndAnswers = require('./routes/questionsAndAnswers');
let cart = require('./routes/cart');
let interactions = require('./routes/interactions');

let app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  res.send('Under construction. Please come back later.');
});

products(app);
reviews(app);
questionsAndAnswers(app);
cart(app);
interactions(app);

module.exports = app;
