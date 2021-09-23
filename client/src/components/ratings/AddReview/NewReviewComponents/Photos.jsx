import React from 'react';

const Photos = (props) => {
  return (
    <div>
      <label>
        <span>Photos: </span>
        <input type='file' name='Photos' />
      </label>
    </div>
  );
};

export default Photos;
