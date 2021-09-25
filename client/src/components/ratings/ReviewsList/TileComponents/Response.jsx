import React from 'react';

const Response = (props) => {
  if (props.response && props.response.length > 0) {
    return (
      <div style={{ borderStyle: 'solid' }}>
        Response from seller: {props.response}
      </div>
    );
  }
  return null;
};

export default Response;
