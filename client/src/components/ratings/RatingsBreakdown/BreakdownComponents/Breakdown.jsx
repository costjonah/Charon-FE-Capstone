import React from 'react';

const Breakdown = (props) => {
  return (
    <React.Fragment>
      <div>Breakdown</div>
      <div>
        <span>5 stars</span>
        <div
          className='bar'
          style={{ borderStyle: 'solid', height: '10px' }}
        ></div>
        <span>4 stars</span>
        <div
          className='bar'
          style={{ borderStyle: 'solid', height: '10px' }}
        ></div>
        <span>3 stars</span>
        <div
          className='bar'
          style={{ borderStyle: 'solid', height: '10px' }}
        ></div>
        <span>2 stars</span>
        <div
          className='bar'
          style={{ borderStyle: 'solid', height: '10px' }}
        ></div>
        <span>1 star</span>
        <div
          className='bar'
          style={{ borderStyle: 'solid', height: '10px' }}
        ></div>
      </div>
    </React.Fragment>
  );
};

export default Breakdown;
