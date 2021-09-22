import React from "react";

class Photo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>
        <input className='photosfiles' type='file' onChange={this.props.handlePhotoChange}/>
        <br/>
        {this.props.photos.map(photo =>
          <img className='AnswerImg' src={photo}/>
        )}
      </span>
    )
  }
}

export default Photo;
