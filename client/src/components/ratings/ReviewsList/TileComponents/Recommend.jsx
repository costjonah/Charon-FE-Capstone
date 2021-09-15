import React from 'react';

const Recommend = (props) => {
  const recommended = '✓ I recommend this product';
  if (props.recommend) {
    return <span>{recommended}</span>;
  }
  return null;
};

export default Recommend;
