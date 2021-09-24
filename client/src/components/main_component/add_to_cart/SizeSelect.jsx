import React from "react";
import Select from "react-select";

const SizeSelector = (props) => {
  const options = [];
  var sizesQty;
  for (var key in props.styleSkus) {
    if (props.styleSkus[key].quantity === 0) {
      options.push({
        value: 0,
        label: "OUT OF STOCK",
      });
    } else {
      options.push({
        value: props.styleSkus[key].size,
        label: props.styleSkus[key].size,
      });
    }
  }
  return (
    <div className="sizeselectormain">
      <div id="selectsize">
        <Select
          placeholder="Select Size"
          options={options}
          onChange={props.handleSizeChange}
          id="sizeselect"
        />
      </div>
    </div>
  );
};

export default SizeSelector;
