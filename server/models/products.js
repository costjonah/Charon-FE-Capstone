const axios = require('axios');
const settings = require('./settings.js');

module.exports = {
  get: (req, res) => {
    axios.get(settings.url + '/products', settings.head)
    .then(result => {
      console.log(result.data);
    })
    .catch(err => { console.error('Error: ', err); });
  }
}