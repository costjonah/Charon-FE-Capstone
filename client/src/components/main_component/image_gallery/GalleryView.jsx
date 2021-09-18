import React from "react";

const Gallery = (props) => {
  if (Object.keys(props.currentStyle).length !== 0) {
    console.log(props);

    return (
      <div className="galleryviewmain">

        <ul className="galthumbs">
        {props.currentStyle.photos.map((pic, index) => {
          // console.log(pic)
          return (
            <li key={index} className="thumbnails">
              <div id="thumbcaro">
            <img
            src={pic.thumbnail_url}
             alt="new"
             id="galleryimg" />
            </div>
            </li>
          )
        })}
        </ul>
      </div>
    );
  } else {
    return (
      <div id="galleryviewmain">

      </div>
    )
  }
};

export default Gallery;
