import React from 'react';
import styled from 'styled-components';

const Factor = ({ name, characteristic }) => {
  return (
    <React.Fragment>
      <div>{name}</div>
      <StyledBar>
        <FilledBar rating={characteristic.value}></FilledBar>
        <StyledArrow>▼</StyledArrow>
      </StyledBar>
      <StyledLabel>
        <div>1</div>
        <div>3</div>
        <div>5</div>
      </StyledLabel>
    </React.Fragment>
  );
};

const StyledBar = styled.div`
  width: 100%;
  height: 15px;
  background-color: lightgrey;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  :hover {
    background-color: grey;
  }
`;
const FilledBar = styled.div`
  width: ${(props) => (props.rating - 1) * 25 - 2}%;
  height: 15px;
`;
const StyledLabel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const StyledArrow = styled.div`
  margin: 0;
  padding: 0;
  vertical-align: text-top;
  transform: translate(0%, -30%);
`;

export default Factor;
