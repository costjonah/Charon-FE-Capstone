import React from "react";
import Select from "react-select";

const options = [
  { value: "extra-small", label: "XS" },
  { value: "small", label: "S" },
  { value: "medium", label: "M" },
  { value: "large", label: "L" },
  { value: "extra-large", label: "XL" },
];

const SizeSelector = () => {
  return (
    <div className="sizeselectormain">
      <div id="selectsize">
        <Select placeholder="Select Size" options={options} />
      </div>
    </div>
  );
};

export default SizeSelector;
