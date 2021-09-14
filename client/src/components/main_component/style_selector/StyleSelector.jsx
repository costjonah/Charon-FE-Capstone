import React from "react";

var StyleSelector = (props) => {
  if (props.styles.product_id !== undefined) {
    console.log(props);

    return (
      <div className="styleselectormain">

        <ul id="styleul">
        <h4 id="currentstylename">Style > Black </h4>
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
