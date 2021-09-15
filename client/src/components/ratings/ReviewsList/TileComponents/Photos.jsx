import React from 'react';

const Photos = (props) => {
  if (props.photos && props.photos.length > 0) {
    return <div>PHOTOS GO HERE</div>;
  }
  return null;
};

export default Photos;
