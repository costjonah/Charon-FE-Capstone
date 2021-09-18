import React from "react";
import ZoomFav from "../image_gallery/ZoomFav.jsx";

var StyleSelector = (props) => {
  if (props.styles.product_id !== undefined) {
    console.log(props);
    return (
      <div className="styleselectormain">
        <ul id="styleul">
          <h4 id="currentstylename"> Style > {props.currentStyle.name} </h4>
          <ZoomFav zoomClick={props.zoomClick} zoom={props.zoom} />
          {props.styles.results.map((style, index) => {
            return (
              <li
                id="styleli"
                key={style.style_id}
                name={style.name}
                onClick={(e) => props.styleClick(style, index, e)}
              >
                <div id="checkdiv">
                  <input
                    className="checked"
                    type="radio"
                    id={"radio" + index}
                    name="checkbox"
                  />
                  <label htmlFor={"radio" + index}></label>
                </div>
                <div id="crop">
                  <img
                    src={style.photos[0].thumbnail_url}
                    alt="new"
                    title={style.name}
                    id="imglist"
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="selectormain">
        <h4>Style Selector Placeholder</h4>
      </div>
    );
  }
};

export default StyleSelector;
