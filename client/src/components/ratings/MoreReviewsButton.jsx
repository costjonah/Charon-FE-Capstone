import React from 'react';
import styled from 'styled-components';

const MoreReviewsButton = ({ showMore, showCount, reviews }) => {
  let moreReviewsButton = null;
  console.log(showCount, reviews);
  if (!reviews) {
    return null;
  }
  if (showCount < reviews.length) {
    moreReviewsButton = <button onClick={showMore}>More Reviews</button>;
  }
  return moreReviewsButton;
};

const StyledReviews = styled.ul`
  width: 100%;
  padding-inline-start: 0;

  height: 550px;
  max-height: 550px;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  .noBullet {
    list-style-type: none;
  }
`;

export default MoreReviewsButton;
