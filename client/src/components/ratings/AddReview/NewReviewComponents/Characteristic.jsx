import React from 'react';

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
  if (!selected) {
    selected = 3;
  }
  meaning = <span>{meanings[char][selected - 1]}</span>;

  return (
    <React.Fragment>
      <label>
        <div>{char}</div>
        <div onChange={handleChange}>
          {meaning}
          <div>
            <input type='radio' value={1} name={char} />1
            <input type='radio' value={2} name={char} />2
            <input type='radio' value={3} name={char} />3
            <input type='radio' value={4} name={char} />4
            <input type='radio' value={5} name={char} />5
          </div>
        </div>
      </label>
    </React.Fragment>
  );
};

export default Characteristic;
