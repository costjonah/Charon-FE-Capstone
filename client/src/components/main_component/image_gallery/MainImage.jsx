import React from "react";
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
} from "react-image-magnifiers";
import ImgModal from "./ImgModal.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";

const MainView = (props) => {
  if (Object.keys(props.currentStyle).length !== 0) {
    if (props.photoLinks[0] !== undefined) {
      return (
        <div className="viewcontainer">
          <FontAwesomeIcon
            icon={faExpandArrowsAlt}
            id="expandbtn"
            title="Expanded View"
            onClick={(e) => props.toggleModal(e)}
          />
          <div id="arrowL">
            <p>
              {" "}
              <FontAwesomeIcon
                icon={faArrowLeft}
                id="leftarrow"
                title="Last Image"
                onClick={(e) => props.leftClick(e)}
              />
            </p>
          </div>
          <div className="defaultview">
            <img
              src={props.photoLinks[props.idxTicker].url}
              alt={props.currentStyle.name}
              className="mainimg"
              title={props.currentStyle.name}
              onClick={(e) => props.toggleModal(e)}
            />
          </div>
          <div id="arrowR">
            <p>
              {" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                id="rightarrow"
                title="Next Image"
                onClick={(e) => props.rightClick(e)}
              />
            </p>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  } else {
    return (
      <div>
        <h2>
          <br />
        </h2>
      </div>
    );
  }
};

export default MainView;
