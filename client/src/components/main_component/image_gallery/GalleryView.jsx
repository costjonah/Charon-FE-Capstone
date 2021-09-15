import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Gallery = (props) => {
  if (Object.keys(props.currentStyle).length !== 0) {
    console.log(props);

    return (
      <div className="galleryviewmain">
        <ul className="galthumbs">
          {props.currentStyle.photos.map((pic, index) => {
            console.log(pic);
            return (
              <div key={index} className="thumbnails">
                <div id="thumbcaro">
                  <img src={pic.thumbnail_url} alt="new" id="galleryimg" />
                </div>
              </div>
            );
          })}
          <p>
            {" "}
            <FontAwesomeIcon icon={faArrowDown} id="downarrow" />
          </p>
        </ul>
      </div>
    );
  } else {
    return <div id="galleryviewmain"></div>;
  }
};

export default Gallery;
