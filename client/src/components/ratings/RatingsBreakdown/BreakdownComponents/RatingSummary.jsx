import React from 'react';

const RatingSummary = (props) => {
  let rating = null;
  if (typeof props.averageRating === 'number' && props.averageRating) {
    rating = <h1>{props.averageRating}</h1>;
  }
  return (
    <div>
      <div>RatingSummary</div>
      {rating}
      <div>★★★★★</div>
      <div>Total Ratings: {props.totalRatings}</div>
    </div>
  );
};

export default RatingSummary;
