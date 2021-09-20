const axios = require('axios');
const settings = require('./settings.js');

module.exports = {
  log: (callback) => {
    axios
      .post(`${settings.url}/interactions`, settings.head)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
};
