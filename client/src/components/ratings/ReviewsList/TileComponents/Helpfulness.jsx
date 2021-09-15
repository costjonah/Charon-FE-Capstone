import React from 'react';

const Helpfulness = (props) => {
  const handleHelpfulClick = () => {
    props.helpful(props.id);
  };

  const handleReportClick = () => {
    props.report(props.id);
  };

  return (
    <div>
      <div>Was this review helpful?</div>
      <div>
        <div onClick={handleHelpfulClick}>Yes ({props.helpfulness})</div>
        <div onClick={handleReportClick}>Report</div>
      </div>
    </div>
  );
};

export default Helpfulness;
