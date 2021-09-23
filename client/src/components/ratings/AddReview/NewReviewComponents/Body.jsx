import React from 'react';

const Body = ({ body, handleChange }) => {
  let minimumCounter = null;
  if (body.length < 50) {
    minimumCounter = (
      <div className='subText'>
        Minimum required characters left: {50 - body.length}
      </div>
    );
  } else if (body.length >= 1000) {
    minimumCounter = <div className='subText'>Maximum Length Reached</div>;
  } else {
    minimumCounter = <div className='subText'>Minimum reached</div>;
  }
  return (
    <div>
      <label>
        <div>Body: </div>
        <textarea
          maxLength={1000}
          name='Review Body'
          value={body}
          onChange={handleChange}
          placeholder='Why did you like the product or not?'
        />
        {minimumCounter}
      </label>
    </div>
  );
};

export default Body;
