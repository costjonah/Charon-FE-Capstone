import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'one', label: '1' },
  { value: 'two', label: '2' },
  { value: 'three', label: '3' },
  { value: 'four', label: '4' },
  { value: 'five', label: '5' }
]

const QuantitySelector = () => {

  return (
    <div className="quantityselectormain">
      <div id="selectquantity">
      <Select placeholder="Quantity" id="pickqty" options={options} />
      </div>
    </div>
  )
};

export default QuantitySelector;