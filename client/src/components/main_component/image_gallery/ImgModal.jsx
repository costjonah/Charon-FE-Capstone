import React from "react";
import ModalGallery from "./ModalGallery.jsx";
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
} from "react-image-magnifiers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ImgModal = (props) => {
  if (Object.keys(props.currentStyle).length !== 0) {
    if (props.modalState === true) {
      if (props.thumbLinks[0] !== undefined) {
        return (
          <div className="expviewmodalcontainer">
            <div className="mainimgmodal">
              <ModalGallery
                currentStyle={props.currentStyle}
                upClick={props.upClick}
                downClick={props.downClick}
                thumbnailClick={props.thumbnailClick}
                galleryClick={props.galleryClick}
                galleryChange={props.galleryChange}
                thumbLinks={props.thumbLinks}
              />
              <div id="modalArrRight">
                <p>
                  {" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    id="modalrightarrow"
                    title="Next"
                    onClick={(e) => props.rightClick(e)}
                  />
                </p>
              </div>
              <div id="modalArrLeft">
                <p>
                  {" "}
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    id="modalleftarrow"
                    title="Last"
                    onClick={(e) => props.leftClick(e)}
                  />
                </p>
              </div>
              <div className="modalview">
                <GlassMagnifier
                  imageSrc={props.thumbLinks[props.idxTicker].thumbnail_url}
                  imageAlt="Expanded View Image"
                  largeImageSrc={props.thumbLinks[props.idxTicker].url}
                  className="fullimg"
                  magnifierBorderSize={1}
                  magnifierSize="40%"
                />
              </div>
            </div>
          </div>
        );
      } else {
        return <div></div>;
      }
    } else if (props.modalState === false) {
      var style = {
        display: "none",
      };
      return <div style={style}></div>;
    }
  } else {
    return <div id="stylenull"></div>;
  }
};

export default ImgModal;
