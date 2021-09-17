import React from "react";
import CursorZoom from "react-cursor-zoom";

const MainView = (props) => {
  if (Object.keys(props.currentStyle).length !== 0) {
    console.log(props);

    if (props.zoom === true) {
      return (
        <div className="defaultview" onMouseOut={props.imageMouseOut}>
          <CursorZoom
            alt="new"
            image={{
              src: props.currentStyle.photos[0].url,
              width: 675,
              height: 450,
            }}
            zoomImage={{
              src: props.currentStyle.photos[0].url,
              width: 1600,
              height: 1200,
            }}
            cursorOffset={{ x: 50, y: 0 }}
            size={125}
          />
        </div>
      );
      document.getElementById("mainimg").style.borderRadius = "5px";
    } else if (props.zoom === false) {
      return (
        <div className="defaultview">
          <img src={props.currentStyle.photos[0].url} alt="new" id="mainimg" />
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
