import React from 'react';

const Response = (props) => {
  if (props.response && props.response.length > 0) {
    return <div>Response from seller: {props.response}</div>;
  }
  return null;
};

export default Response;
