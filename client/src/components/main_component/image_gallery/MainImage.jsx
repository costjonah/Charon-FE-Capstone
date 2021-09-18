import React from "react";
import CursorZoom from "react-cursor-zoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const MainView = (props) => {
  if (Object.keys(props.currentStyle).length !== 0) {
    if (props.zoom === false) {
      return (
        <div className="viewcontainer">
          <div className="defaultview">
            <img
              src={props.currentStyle.photos[props.idxTicker].url}
              alt="new"
              id="mainimg"
            />
          </div>
          <div id="arrowR">
            <p>
              {" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                id="rightarrow"
                onClick={(e) => props.rightClick(e)}
              />
            </p>
          </div>
        </div>
      );
    } else if (props.zoom === true) {
      return (
        <div className="viewcontainer">
          <div className="defaultview" onMouseOut={props.imageMouseOut}>
            <CursorZoom
              image={{
                src: props.currentStyle.photos[props.idxTicker].url,
                width: 675,
                height: 450,
                style: {
                  borderRadius: "5px",
                  display: "block",
                  height: "100%",
                  width: "100%",
                },
              }}
              zoomImage={{
                src: props.currentStyle.photos[props.idxTicker].url,
                width: 1600,
                height: 1200,
              }}
              cursorOffset={{ x: 50, y: 0 }}
              size={125}
            />
          </div>
          <div id="arrowR">
            <p>
              {" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                id="rightarrow"
                onClick={(e) => props.upClick(e)}
              />
            </p>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div>
        <h2>Main Image</h2>
      </div>
    );
  }
};

export default MainView;
