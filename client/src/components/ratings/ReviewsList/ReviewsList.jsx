import React from 'react';
import ReviewTile from './ReviewTile.jsx';

const ReviewsList = (props) => {
  let shownReviews = props.reviews.slice(0, props.count);
  return (
    <ul>
      {shownReviews.map((review) => {
        return <ReviewTile review={review} key={review.review_id} />;
      })}
    </ul>
  );
};

export default ReviewsList;
