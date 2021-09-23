import React from 'react';

const OverallRating = ({ selected, handleChange }) => {
  let meanings = ['Poor', 'Fair', 'Average', 'Good', 'Great'];
  let meaning = null;
  meaning = <span>{meanings[selected - 1]}</span>;

  return (
    <div onChange={handleChange}>
      <label>
        Overall Rating
        <input type='radio' value={1} name='rating' />
        <input type='radio' value={2} name='rating' />
        <input type='radio' value={3} name='rating' />
        <input type='radio' value={4} name='rating' />
        <input type='radio' value={5} name='rating' /> {meaning}
      </label>
    </div>
  );
};

export default OverallRating;
