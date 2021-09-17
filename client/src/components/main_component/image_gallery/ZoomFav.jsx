import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ZoomFav = (props) => {
  console.log('ZOOOOM', props)
  return (
    <div>
      <h3 className="zoom fav">
        <FontAwesomeIcon icon={faSearch} id="zoomin" onClick={props.zoomClick}/>{" "}
        <FontAwesomeIcon icon={faHeart} id="heart" />{" "}
      </h3>
    </div>
  );
};

export default ZoomFav;
