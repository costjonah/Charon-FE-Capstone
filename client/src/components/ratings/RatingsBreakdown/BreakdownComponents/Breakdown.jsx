import React from 'react';
import styled from 'styled-components';

const StyledBar = styled.div`
  width: 100%;
  background-color: lightgrey;

  :hover {
    background-color: grey;
  }
`;
const FilledBar = styled.div`
  width: ${(props) => (props.rating ? props.rating : 0)}%;
  height: 10px;
  background-color: green;

  ${StyledBar}:hover & {
    background-color: darkgreen;
  }
`;

const Breakdown = (props) => {
  let breakdown = [];

  let handleClick = (e) => {
    props.filterBy(e.target.id);
  };

  let makeBar = (starRating) => {
    return (
      <React.Fragment key={starRating}>
        <span>{starRating} stars</span>
        <StyledBar id={starRating} onClick={handleClick}>
          <FilledBar
            id={starRating}
            rating={props.ratingsPer[starRating]}
          ></FilledBar>
        </StyledBar>
      </React.Fragment>
    );
  };
  for (var i = 5; i > 0; i--) {
    breakdown.push(makeBar(i + ''));
  }

  return (
    <React.Fragment>
      <div>Breakdown</div>
      {breakdown}
    </React.Fragment>
  );
};

export default Breakdown;
