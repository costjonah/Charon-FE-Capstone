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

const Characteristic = ({ char, handleChange, selected }) => {
  let meanings = {
    Size: [
      'A size too small',
      '½ a size too small',
      'Perfect',
      '½ a size too big',
      'A size too wide',
    ],
    Width: [
      'Too narrow',
      'Slightly narrow',
      'Perfect',
      'Slightly wide',
      'Too wide',
    ],
    Comfort: [
      'Uncomfortable',
      'Slightly uncomfortable',
      'Ok',
      'Comfortable',
      'Perfect',
    ],
    Quality: [
      'Poor',
      'Below average',
      'What I expected',
      'Pretty great',
      'Perfect',
    ],
    Length: [
      'Runs Short',
      'Runs slightly short',
      'Perfect',
      'Runs slightly long',
      'Runs long',
    ],
    Fit: [
      'Runs tight',
      'Runs slightly tight',
      'Perfect',
      'Runs slightly long',
      'Runs long',
    ],
  };

  let meaning = null;
  meaning = <span>{meanings[char][selected - 1]}</span>;

  return (
    <React.Fragment>
      <label>
        <div>{char}</div>
        <StyledRadio onChange={handleChange}>
          {meaning}
          <div>
            <input type='radio' value={1} name={char} />1
            <input type='radio' value={2} name={char} />2
            <input type='radio' value={3} name={char} defaultChecked />3
            <input type='radio' value={4} name={char} />4
            <input type='radio' value={5} name={char} />5
          </div>
        </StyledRadio>
      </label>
    </React.Fragment>
  );
};

export default Characteristic;
