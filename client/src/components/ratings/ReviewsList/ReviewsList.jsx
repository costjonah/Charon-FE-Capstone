import React from 'react';
import ReviewTile from './ReviewTile.jsx';

const ReviewsList = (props) => {
  let shownReviews = props.reviews.slice(0, props.count);
  let sortedReviews = shownReviews.sort(props.sortFunction);
  return (
    <ul>
      {shownReviews.map((review) => {
        if (
          props.filter.length === 0 ||
          props.filter.includes(review.rating + '')
        ) {
          return (
            <ReviewTile
              review={review}
              key={review.review_id}
              helpful={props.helpful}
              report={props.report}
            />
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
};

export default ReviewsList;
