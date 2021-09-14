import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons"
import { faPinterestSquare } from "@fortawesome/free-brands-svg-icons"

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
    <div>
      <h3>{currentSlogan}</h3>
      <h5>{currentDescription}</h5>
      <FontAwesomeIcon icon={faFacebookSquare} id="facebook"/>
      <FontAwesomeIcon icon={faInstagramSquare} id="instagram"/>
      <FontAwesomeIcon icon={faPinterestSquare} id="pinterest"/>
    </div>
  );
};

export default FreeForm;
