import React from "react";

var FreeForm = (props) => {
  var currentSlogan;
  var currentDescription;
  for (var i = 0; i < props.products.length; i++) {
    if (props.products[i].id === props.productId) {
      currentSlogan = props.products[i].slogan;
      currentDescription = props.products[i].description;
    }
  }

  return (
    <div className="freeformmain">
      <h3>{currentSlogan}</h3>
      <h5>{currentDescription}</h5>
    </div>
  );
};

export default FreeForm;
