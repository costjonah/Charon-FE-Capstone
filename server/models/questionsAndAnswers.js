const axios = require('axios');
const settings = require('./settings.js');

module.exports = {
  get: (req, res) => {
    axios.get(settings.url + '/', settings.head)
    .then(result => {
      console.log(result);
    })
  }
}