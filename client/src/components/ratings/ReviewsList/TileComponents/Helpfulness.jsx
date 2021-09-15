import React from 'react';

const Helpfulness = (props) => {
  const doNothing = () => {
    console.log('clicked this!');
  };
  return (
    <div>
      <div>Was this review helpful?</div>
      <div>
        <div onClick={doNothing}>Yes ({1})</div>
        <div onClick={doNothing}>No ({2})</div>
      </div>
    </div>
  );
};

export default Helpfulness;
