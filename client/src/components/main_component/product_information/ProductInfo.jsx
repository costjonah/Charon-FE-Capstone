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
    <div className="productinfomain">
      <br />
      <h4 id="curCateg">{currentCategory}</h4>
      <h1 id="curName">{currentName}</h1>
      <h4 id="curPrice">${stylePrice}</h4>
    </div>
  );
};

export default ProductInfo;
