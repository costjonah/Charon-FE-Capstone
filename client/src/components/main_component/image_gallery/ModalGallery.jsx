import React from "react";

const ModalGallery = (props) => {
  if (Object.keys(props.currentStyle).length !== 0) {
    return (
      <div className="modalgallerymain">
        <div>
          <ul className="modalgalthumbs galthumbs">
            {props.photoLinks.map((pic, index) => {
              console.log('MODALPIC', pic)
              return (
                <li key={index} className="modalthumbnails thumbnails">
                  <div className="modalthumbcaro thumbcaro">
                    <img
                      src={pic}
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
    return <div id="modalstylenull"></div>;
  }
};

export default ModalGallery;
