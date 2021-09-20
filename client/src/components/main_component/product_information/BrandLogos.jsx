import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faPinterestSquare } from "@fortawesome/free-brands-svg-icons";

var FreeForm = (props) => {
  return (
    <div className="brandlogomain">
      <a
        href="https://www.facebook.com/sharer/sharer.php?u=example.org"
        target="_blank"
      >
        <FontAwesomeIcon icon={faFacebookSquare} id="facebook" />
      </a>{" "}
      <a href="https://twitter.com/share" target="_blank">
        <FontAwesomeIcon icon={faTwitterSquare} id="twitter" />
      </a>{" "}
      <a href="https://www.instagram.com/accounts/login/" target="_blank">
        <FontAwesomeIcon icon={faInstagramSquare} id="instagram" />{" "}
      </a>
      <a href="http://pinterest.com/pin/create/link/?url=" target="_blank">
        <FontAwesomeIcon icon={faPinterestSquare} id="pinterest" />
      </a>
    </div>
  );
};

export default FreeForm;
