import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faPinterestSquare } from "@fortawesome/free-brands-svg-icons";

var FreeForm = (props) => {
  return (
    <div className="brandlogomain">
      <FontAwesomeIcon icon={faFacebookSquare} id="facebook"/>
      {" "}
      <FontAwesomeIcon icon={faInstagramSquare} id="instagram"/>
      {" "}
      <FontAwesomeIcon icon={faPinterestSquare} id="pinterest"/>
    </div>
  );
};

export default FreeForm;