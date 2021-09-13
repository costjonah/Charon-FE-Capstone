import React from 'react';
import ReviewTile from './ReviewTile.jsx';

const ReviewsList = (props) => {
  return (
    <ul>
      {props.reviews.map((review) => {
        return <ReviewTile review={review} key={review.review_id}/>;
      })}
    </ul>
  );
};

export default ReviewsList;
