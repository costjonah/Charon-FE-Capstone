import React from 'react';

const Recommendations = (props) => {
  let recommended = null;
  if (!Number.isNaN(props.recommended)) {
    recommended = props.recommended;
  }
  return (
    <React.Fragment>
      <span>{recommended}% of reviews recommend this product</span>
    </React.Fragment>
  );
};

export default Recommendations;
