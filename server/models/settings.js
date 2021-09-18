const config = require("../../config.js");

module.exports = {
  url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe",
  head: {
    headers: {
      Authorization: config.TOKEN,
    },
  },
};
