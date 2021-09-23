import React from 'react';
import styled from 'styled-components';

const OverallRating = ({ selected, handleChange, valid }) => {
  let meanings = ['Poor', 'Fair', 'Average', 'Good', 'Great'];
  let meaning = null;
  meaning = <span>{meanings[selected - 1]}</span>;

  return (
    <div>
      <span>Overall Rating: </span>
      <span>
        {meanings.map((meaning, index) => {
          return (
            <StarContainer key={index}>
              <Star filled={index + 1 <= selected}>★ </Star>
              <input
                type='checkbox'
                value={index + 1}
                name={`rating${index + 1}`}
                checked={index + 1 <= selected}
                onChange={handleChange}
                className='ratingStars'
              />
            </StarContainer>
          );
        })}
      </span>
      <span> {meaning}</span>
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
  -webkit-text-stroke-color: black;

  :hover {
    -webkit-text-fill-color: rgb(100, 100, 100);
    cursor: pointer;
  }
`;

export default OverallRating;
