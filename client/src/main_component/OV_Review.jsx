import React from 'react';
import Select from 'react-select';

const Review = (props) => {
  console.log('PROPS: ', props)
  if (props !== undefined) {
  return (
    <div>
      <h4>Review</h4>
      <div className="ratingsmap">

      {props.metadata.map((data) => {
        return (
          <div>
        {console.log(data)}
        </div>
        )
      })}
    </div>
    </div>
  )
  } else {
    return (
      <div>
        <h4>No Reviews</h4>
      </div>
    )
  }
};

export default Review;