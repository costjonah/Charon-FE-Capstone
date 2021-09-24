import React from 'react';
import styled from 'styled-components';

const Breakdown = (props) => {
  let breakdown = [];

  let handleClick = (e) => {
    props.filterBy(e.target.id);
  };

  let makeBar = (starRating) => {
    return (
      <div key={starRating}>
        <StyledRating onClick={handleClick}>
          <div className='ratingBreakdownLabel space'>{starRating} star</div>
          <StyledBar className='styledBar space' id={starRating}>
            <FilledBar
              id={starRating}
              rating={props.ratingsPer[starRating]}
            ></FilledBar>
          </StyledBar>
          <div className='ratingBreakdownLabel space'>
            {props.ratingsPer[starRating]}%
          </div>
        </StyledRating>
      </div>
    );
  };
  for (var i = 5; i > 0; i--) {
    breakdown.push(makeBar(i + ''));
  }

  return <React.Fragment>{breakdown}</React.Fragment>;
};

const StyledRating = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  :hover .ratingBreakdownLabel {
    color: #5c527f;
  }
  :hover .styledBar {
    background-color: #6e85b2;
  }

  .ratingBreakdownLabel {
    white-space: nowrap;
    width: 15%;
  }
  .space {
    margin: 5px;
  }
`;
const StyledBar = styled.div`
  margin: 0;
  width: 70%;
  height: 15px;
  background-color: lightgrey;
  border-radius: 5px;
`;
const FilledBar = styled.div`
  margin: 0;
  width: ${(props) => (props.rating ? props.rating : 0)}%;
  height: 15px;
  background-color: #3e2c41;
  border-radius: 5px;
`;

export default Breakdown;
