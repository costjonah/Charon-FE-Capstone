import React from "react";
import CursorZoom from "react-cursor-zoom";

const MainView = (props) => {
  if (Object.keys(props.currentStyle).length !== 0) {
    // console.log(props);
    if (props.zoom === false) {
      return (
        <div className="defaultview">
          <img src={props.currentStyle.photos[0].url} alt="new" id="mainimg" />
        </div>
      );
    } else if (props.zoom === true) {
      return (
        <div className="defaultview" onMouseOut={props.imageMouseOut}>
          <styledCursorZoom>
            <CursorZoom
              image={{
                src: props.currentStyle.photos[0].url,
                width: 675,
                height: 450,
                style: { borderRadius: "5px", display: "block" },
              }}
              zoomImage={{
                src: props.currentStyle.photos[0].url,
                width: 1600,
                height: 1200,
                style: { borderRadius: "5px", display: "block" },
              }}
              cursorOffset={{ x: 50, y: 0 }}
              size={125}
            />
          </styledCursorZoom>
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
