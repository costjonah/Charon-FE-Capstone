import React from 'react';

const Rating = (props) => {
  let stars = '';
  for (var i = 0; i < 5; i++) {
    if (i < props.rating) {
      stars += '★';
    } else {
      stars += '☆';
    }
  }
  return <div>{stars}</div>;
};

export default Rating;
