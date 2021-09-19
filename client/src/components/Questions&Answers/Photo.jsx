import React from 'react';


class Photo extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div>
        <input type='file' onChange={this.props.handlePhotoChange}/>
        <br/>
        {this.props.photos.map(photo =>
          <img className='AnswerImg' src={photo}/>
        )}
      </div>
    )
  }
}


export default Photo;