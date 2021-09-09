const express = require('express');

let app = express();

app.use(express.json());
app.use(express.static('client'));

require('./routes/products')(app);
require('./routes/reviews')(app);
require('./routes/questionsAndAnswers')(app);
require('./routes/cart')(app);
require('./routes/interactions')(app);

module.exports = app;