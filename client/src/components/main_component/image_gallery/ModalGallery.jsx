import React from "react";

const ModalGallery = (props) => {
  if (Object.keys(props.currentStyle).length !== 0) {
    if (props.thumbLinks[0] !== undefined) {
      return (
        <div className="modalgallerymain">
          <div>
            <ul className="modalgalthumbs galthumbs">
              {props.thumbLinks.map((pic, index) => {
                return (
                  <li key={index} className="modalthumbnails thumbnails">
                    <div className="modalthumbcaro thumbcaro">
                      <img
                        src={pic.thumbnail_url}
                        alt="new"
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
        </div>
      );
    } else {
      return <div></div>;
    }
  } else {
    return <div id="modalstylenull"></div>;
  }
};

export default ModalGallery;
