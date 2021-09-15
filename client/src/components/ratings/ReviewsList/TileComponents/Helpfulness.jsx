import React from 'react';

const Helpfulness = (props) => {
  const doNothing = () => {
    console.log('Helpful!');
  };

  const doNothingAgain = () => {
    console.log('Reported!');
  };

  return (
    <div>
      <div>Was this review helpful?</div>
      <div>
        <div onClick={doNothing}>Yes ({props.helpfulness})</div>
        <div onClick={doNothingAgain}>Report</div>
      </div>
    </div>
  );
};

export default Helpfulness;
