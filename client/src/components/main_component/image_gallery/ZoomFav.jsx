import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { faSearchMinus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ZoomFav = (props) => {
  if (props.zoom === false) {
    return (
      <div>
        <h3 className="zoom fav">
          <FontAwesomeIcon
            icon={faSearchPlus}
            id="zoomin"
            onClick={props.zoomClick}
          />{" "}
          <FontAwesomeIcon icon={faHeart} id="heart" />{" "}
        </h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3 className="zoom fav">
          <FontAwesomeIcon
            icon={faSearchMinus}
            id="zoomin"
            onClick={props.zoomClick}
          />{" "}
          <FontAwesomeIcon icon={faHeart} id="heart" />{" "}
        </h3>
      </div>
    );
  }
};

export default ZoomFav;
