import React from 'react';
import styled from 'styled-components';

const StyledBar = styled.div`
  width: 100%;
  background-color: grey;
`;
const FilledBar = styled.div`
  width: ${props => props.rating}%;
  height: 10px;
  background-color: green;
`;

const Breakdown = (props) => {
  console.log(props.ratingsPer);
  return (
    <React.Fragment>
      <div>Breakdown</div>
      <div>
        <span>5 stars</span>
        <StyledBar>
          <FilledBar rating={props.ratingsPer['5']}></FilledBar>
        </StyledBar>
        <span>4 stars</span>
        <StyledBar>
          <FilledBar rating={props.ratingsPer['4']}></FilledBar>
        </StyledBar>
        <span>3 stars</span>
        <StyledBar>
          <FilledBar rating={props.ratingsPer['3']}></FilledBar>
        </StyledBar>
        <span>2 stars</span>
        <StyledBar>
          <FilledBar rating={props.ratingsPer['2']}></FilledBar>
        </StyledBar>
        <span>1 star</span>
        <StyledBar>
          <FilledBar rating={props.ratingsPer['1']}></FilledBar>
        </StyledBar>
      </div>
    </React.Fragment>
  );
};

export default Breakdown;
