import React from "react";
import PhotoModal from './PhotoModal.jsx'

class Photo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>
        <input value={''} className='photosfiles' type='file' onChange={this.props.handlePhotoChange}/>
        <br/>
        {this.props.photos.map((photo, index) =>
          <img key={index} className='AnswerImg' src={photo} onClick={this.props.showPhotoModal}/>
        )}
        {this.props.photoclicked === true ? <PhotoModal photo={this.props.photo} closePhotoModal={this.props.closePhotoModal}/> : <></>}
      </span>
    )
  }
}

export default Photo;
