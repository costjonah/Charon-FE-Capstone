import React from 'react';
import Characteristic from './Characteristic.jsx';

const Characteristics = ({ characteristics, handleChange, selections }) => {
  if (!characteristics) {
    return null;
  }
  return (
    <div>
      <label>Characteristics</label>
      {Object.keys(characteristics).map((key) => {
        return (
          <Characteristic
            char={key}
            key={key}
            handleChange={handleChange}
            selected={selections[key]}
          />
        );
      })}
    </div>
  );
};

export default Characteristics;
