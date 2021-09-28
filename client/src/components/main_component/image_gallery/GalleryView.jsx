import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Gallery = (props) => {
  if (Object.keys(props.currentStyle).length !== 0) {
    const imagePath = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png';
    if (props.thumbLinks[0] !== undefined) {
      return (
        <div className="galleryviewmain">
          <div id="arrowU">
            <p>
              {" "}
              <FontAwesomeIcon
                icon={faArrowUp}
                id="uparrow"
                title="Previous"
                onClick={(e) => props.upClick(e)}
              />
            </p>
          </div>
          <div>
            <ul className="galthumbs">
              {props.thumbLinks.map((pic, index) => {
                return (
                  <li key={index} className="thumbnails">
                    <div className="thumbcaro">
                      <img
                        src={pic.thumbnail_url ? pic.thumbnail_url : imagePath}
                        alt={"img" + index}
                        id={"img" + index}
                        className="galleryimg"
                        title={"Style " + (index + 1)}
                        onClick={(e) => props.thumbnailClick(index, e)}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div id="arrowD">
            <p>
              {" "}
              <FontAwesomeIcon
                icon={faArrowDown}
                id="downarrow"
                title="Next"
                onClick={(e) => props.downClick(e)}
              />
            </p>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  } else {
    return <div id="galleryviewmain"></div>;
  }
};

export default Gallery;
