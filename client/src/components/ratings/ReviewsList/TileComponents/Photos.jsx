import React from 'react';

const Photos = (props) => {
  if (props.photos && props.photos.length > 0) {
    return (
      <div>
        {props.photos.map((photo) => {
          return (
            <img
              key={photo.id}
              style={{ height: '100px', width: '100px' }}
              src={photo.url}
              alt={photo.url}
            ></img>
          );
        })}
      </div>
    );
  }
  return null;
};

export default Photos;
