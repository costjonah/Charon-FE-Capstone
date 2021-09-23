import React from 'react';

const PhotoModal = (props) => {
  return (
    <div className='photoModal' >
      <img className='photoModal-content' src={props.photo}/>
      <span className='photoModal-close' onClick={props.closePhotoModal}> &times;</span>
    </div>
  )

}

export default PhotoModal;