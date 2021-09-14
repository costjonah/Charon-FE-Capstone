import React from "react";

var ProductInfo = (props) => {
  var currentCategory;
  var currentName;
  var stylePrice = props.currentStyle["original_price"];
  for (var i = 0; i < props.products.length; i++) {
    if (props.products[i].id === props.productId) {
      currentCategory = props.products[i].category;
      currentName = props.products[i].name;
    }
  }
  return (
    <div>
      <h4>{currentCategory}</h4>
      <h2>{currentName}</h2>
      <h4>{stylePrice}</h4>
    </div>
  );
};

export default ProductInfo;
