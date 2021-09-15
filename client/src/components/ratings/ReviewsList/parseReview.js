module.exports = {
  photos: (photos) => {
    //return photos;
    return [];
  },
  recommend: (recommend) => {
    const recommended = 'I recommend this product ✓';
    if (recommend) {
      return recommended;
    }
    return;
  },
  name: (name) => {
    return name;
  },
  response: (response) => {
    if (response && response.length > 0) {
      return `Response from seller: ${response}`;
    }
    return response;
  },
  helpfulness: (helpfulness) => {
    return helpfulness;
  },
};
