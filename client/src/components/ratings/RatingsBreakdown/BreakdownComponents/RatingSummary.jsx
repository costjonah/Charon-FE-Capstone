import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

const RatingSummary = (props) => {
  let ratingNumber = null;
  let rating = 0;
  if (typeof props.averageRating === 'number' && props.averageRating) {
    ratingNumber = <div className='reviewsRating'>{props.averageRating}</div>;
    rating = props.averageRating;
  }
  return (
    <StyledRating>
      {ratingNumber}
      <div>
        <StarRatings rating={rating} starDimension='25px' starSpacing='1px' />
        <div>Total Ratings: {props.totalRatings}</div>
      </div>
    </StyledRating>
  );
};

const StyledRating = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  .reviewsRating {
    font-size: 300%;
    margin: 0 10px;
  }
`;

export default RatingSummary;
