import React from 'react';
import styled from 'styled-components'

const OverallRating = ({ selected, handleChange }) => {
  let meanings = ['Poor', 'Fair', 'Average', 'Good', 'Great'];
  let meaning = null;
  meaning = <span>{meanings[selected - 1]}</span>;

  return (
    <div onChange={handleChange}>
      <label>
        <span>Overall Rating: </span>
        <input type='radio' value={1} name='rating' />
        <input type='radio' value={2} name='rating' />
        <input type='radio' value={3} name='rating' />
        <input type='radio' value={4} name='rating' />
        <input type='radio' value={5} name='rating' /> {meaning}
      </label>
    </div>
  );
};

const StarContainer = styled.label`
  .ratingStars {
    -webkit-appearance: none;
    display: none;
  }
`;
const Star = styled.span`
  -webkit-text-fill-color: ${(props) =>
    props.filled ? 'black' : 'transparent'};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #3e2c41;

  :hover {
    -webkit-text-fill-color: rgb(100, 100, 100);
    cursor: pointer;
  }
`;

export default OverallRating;
