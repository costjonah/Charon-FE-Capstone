import React from 'react';


class Photo extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div>
        <input type='file' onChange={this.props.handlePhotoChange}/>
        {this.props.photos.map(photo =>
          <img src={photo}/>
        )}
      </div>
    )
  }
}


export default Photo;