import React from 'react';
const parseReview = require('./parseReview.js');

const ReviewTile = (props) => {
  return (
    <li>
      {parseReview.rating(props.review.rating)}
      <br />
      {parseReview.date(props.review.date)}
      <br />
      {parseReview.summary(props.review.summary)}
      <br />
      {parseReview.body(props.review.body)}
      <br />
      {parseReview.photos(props.review.photos)}
      <br />
      {parseReview.recommend(props.review.recommend)}
      <br />
      {parseReview.name(props.review.reviewer_name)}
      <br />
      {parseReview.response(props.review.response)}
      <br />
      {parseReview.helpfulness(props.review.helpfulness)}
    </li>
  );
};

export default ReviewTile;
