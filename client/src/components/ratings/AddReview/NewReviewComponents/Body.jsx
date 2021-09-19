import React from 'react';

const Body = ({ body, handleChange }) => {
  let maxLengthWarning = null;
  if (body.length >= 1000) {
    maxLengthWarning = <div>Maximum Length Reached</div>;
  }
  return (
    <div>
      <label>
        <div>Body</div>
        {maxLengthWarning}
        <textarea
          maxLength={1000}
          name='Review Body'
          value={body}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Body;
