import React from "react";

const FreeForm = (props) => {
  let currentSlogan;
  let currentDescription;
  for (let i = 0; i < props.products.length; i++) {
    if (props.products[i].id === props.productId) {
      currentSlogan = props.products[i].slogan;
      currentDescription = props.products[i].description;
    }
  }

  return (
    <div className="freeformmain">
      <h3 id="curslogan">{currentSlogan}</h3>
      <h5 id="curdescrip">{currentDescription}</h5>
    </div>
  );
};

export default FreeForm;
