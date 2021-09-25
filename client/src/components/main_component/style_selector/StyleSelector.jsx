import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const StyleSelector = (props) => {
  if (props.styles.product_id !== undefined) {
    return (
      <div className="styleselectormain">
        <ul id="styleul">
          <h4 id="currentstylename"> Style > {props.currentStyle.name} </h4>
          <h3 className="fav">
            <FontAwesomeIcon icon={faHeart} id="heart" title="Favorite" />{" "}
          </h3>
          {props.styles.results.map((style, index) => {
            return (
              <li
                className="styleli"
                key={style.style_id}
                name={style.name}
                id={style.style_id}
                onClick={(e) => props.styleClick(style, index, e)}
              >
                <div key={style.style_id} id="checkdiv">
                  <input
                    key={style.style_id}
                    className="checkMarked"
                    type="radio"
                    id={"radio" + index}
                    name="checkbox"
                    onChange={(e) => props.styleChange(e)}
                    checked={props.selected === style.style_id}
                  />
                  <label htmlFor={"radio" + index}></label>
                </div>
                <div id="crop">
                  <img
                    className="imglist"
                    src={style.photos[0].thumbnail_url}
                    alt={style.name}
                    title={style.name}
                    id={style.style_id}
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
