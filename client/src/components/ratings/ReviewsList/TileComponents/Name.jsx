import React from 'react';

const Name = (props) => {
  let verified = null;
  if (props.name === 'VERIFIED NAME') {
    verified = <span>✓</span>;
  }
  if (props.name) {
    return (
      <span>
        {verified} {props.name},{' '}
      </span>
    );
  }
  return null;
};

export default Name;
