import React from "react";
import Select from "react-select";

const SizeSelector = (props) => {

  const options = [];
  var sizesQty;
  for (var key in props.styleSkus) {
    console.log(props.styleSkus[key]);
    options.push({
      value: props.styleSkus[key].size,
      label: props.styleSkus[key].size,
    });
  }

  return (
    <div className="sizeselectormain">
      <div id="selectsize">
        <Select placeholder="Select Size" options={options} onChange={props.handleSizeChange} id="sizeselect"/>
      </div>

    </div>
  );

};

export default SizeSelector;
