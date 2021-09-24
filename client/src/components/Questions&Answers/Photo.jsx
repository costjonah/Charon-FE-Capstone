import React from "react";

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
          <img key={index} className='AnswerImg' src={photo} onClick={() => console.log('hello')}/>
        )}
      </span>
    )
  }
}

export default Photo;
