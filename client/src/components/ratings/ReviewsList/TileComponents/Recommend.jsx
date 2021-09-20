import React from 'react';

const Recommend = (props) => {
  if (props.recommend) {
    return (
      <div>
        <span className='large'>✓</span>
        <span>I recommend this product</span>
      </div>
    );
  }
  return null;
};

export default Recommend;
