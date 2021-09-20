import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import styled from 'styled-components';

const StyledReviews = styled.ul`
  width: 100%;
  padding-inline-start: 0;

  .noBullet {
    list-style-type: none;
  }
`;

const ReviewsList = (props) => {
  let shownReviews = props.reviews.slice(0, props.count);
  let sortedReviews = shownReviews.sort(props.sortFunction);
  return (
    <StyledReviews name='Reviews List'>
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
    </StyledReviews>
  );
};

export default ReviewsList;
