import React from "react";
import ZoomFav from "../image_gallery/ZoomFav.jsx";

var StyleSelector = (props) => {
  console.log('LINE5: ', props);
  if (props.styles.product_id !== undefined) {
    return (
      <div className="styleselectormain">
        <ul id="styleul">
          <h4 id="currentstylename">Style > </h4>
          <ZoomFav zoomClick={props.zoomClick} zoom={props.zoom} />
          {props.styles.results.map((style, index) => {
            // console.log(index);
            return (
              <li id="styleli" key={style.style_id} name={style.name}>
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
