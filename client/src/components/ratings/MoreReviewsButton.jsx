import React from 'react';
import styled from 'styled-components';

const MoreReviewsButton = ({ showMore, showCount, reviews }) => {
  let moreReviewsButton = null;
  if (!reviews) {
    return null;
  }
  if (showCount < reviews.length) {
    moreReviewsButton = (
      <button className='reviewListButton' onClick={showMore}>
        More Reviews
      </button>
    );
  }
  return moreReviewsButton;
};

export default MoreReviewsButton;
