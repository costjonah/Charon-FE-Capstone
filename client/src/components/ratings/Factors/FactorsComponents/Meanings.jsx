import React from 'react';

const Meanings = ({ char, number }) => {
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
  meaning = <div>{meanings[char][number - 1]}</div>;

  return <React.Fragment>{meaning}</React.Fragment>;
};

export default Meanings;
