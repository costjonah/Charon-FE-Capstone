import React from 'react';
import styled from 'styled-components';

const StyledRadio = styled.div`
  cursor: pointer;
  input[type='radio'],
  input[type='radio']:after,
  input[type='radio']:checked:after {
    margin: 0;
    position: revert;
    appearance: revert;
    box-sizing: revert;
    font-size: revert;
    content: revert;
    border: revert;
    font-size: 20px;
    color: revert;
    font-size: revert;
    display: revert;
  }
`;

const Recommended = ({ handleChange }) => {
  return (
    <StyledRadio onChange={handleChange}>
      <label>
        <span>Recommended: </span>
        <input type='radio' value={true} name='recommended' />
        <span> Yes </span>
        <input type='radio' value={false} name='recommended' />
        <span> No </span>
      </label>
    </StyledRadio>
  );
};

export default Recommended;
