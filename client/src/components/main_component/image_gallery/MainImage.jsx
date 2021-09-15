import React from "react";

const MainView = (props) => {
  if (Object.keys(props.currentStyle).length !== 0) {
    // console.log(props.currentStyle);
    return (
      <div className="defaultview">
        <img src={props.currentStyle.photos[0].url} alt="new" id="mainimg" />
      </div>
    );
  } else {
    return (
      <div>
        <h2>Main Image</h2>
      </div>
    );
  }
};

export default MainView;
