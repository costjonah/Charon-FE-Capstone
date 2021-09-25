import React from 'react';
import styled from 'styled-components';
import Factor from './FactorsComponents/Factor.jsx';

const Factors = ({ characteristics }) => {
  let factors = Object.keys(characteristics);
  return factors.map((factor) => {
    return (
      <Factor
        key={factor}
        name={factor}
        characteristic={characteristics[factor]}
      />
    );
  });
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
    background-color: #6e85b2;
  }
`;
const FilledBar = styled.div`
  width: ${(3 - 1) * 25 - 2}%;
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

export default Factors;
