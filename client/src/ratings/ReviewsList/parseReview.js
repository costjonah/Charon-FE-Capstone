module.exports = {
  rating: (rating) => {
    let stars = '';
    for (var i = 0; i < 5; i++) {
      if (i < rating) {
        stars += '★';
      } else {
        stars += '☆';
      }
    }
    return stars;
  },
  date: (date) => {
    const d = new Date(date);
    console.log(d);
    var dateString = `${d.toLocaleString('default', {
      month: 'long',
    })} ${d.getDate()}, ${d.getFullYear()}`;
    return dateString;
  },
  summary: (summary) => {
    return summary;
  },
  body: (body) => {
    return body;
  },
  photos: (photos) => {
    return photos;
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
    return response;
  },
  helpfulness: (helpfulness) => {
    return helpfulness;
  },
};
