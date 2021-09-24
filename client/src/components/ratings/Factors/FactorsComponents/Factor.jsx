import React from 'react';
import styled from 'styled-components';
import Meanings from './Meanings.jsx';

const Factor = ({ name, characteristic }) => {
  return (
    <StyledFactor>
      <div>{name}</div>
      <StyledBar>
        <FilledBar rating={characteristic.value}></FilledBar>
        <StyledArrow>▼</StyledArrow>
      </StyledBar>
      <StyledLabel>
        <Meanings char={name} number={1} />
        <Meanings char={name} number={5} />
      </StyledLabel>
    </StyledFactor>
  );
};

const StyledFactor = styled.div`
  margin: 10px 0;
`;
const StyledBar = styled.div`
  width: 100%;
  height: 15px;
  background-color: lightgrey;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 5px;

  :hover {
    background-color: #6e85b2;
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
