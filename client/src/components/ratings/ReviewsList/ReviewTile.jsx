import React from 'react';
const parseReview = require('./parseReview.js');

const ReviewTile = (props) => {
  return (
    <li style={{ listStyleType: 'none' }}>
      <div style={{ borderStyle: 'solid' }}>
        <span>{parseReview.summary(props.review.summary)}</span>
        <br />
        <div>{parseReview.rating(props.review.rating)}</div>
        <br />
        <span>{parseReview.date(props.review.date)}</span>
        <br />
        <div>{parseReview.body(props.review.body)}</div>
        <br />
        <div>{parseReview.photos(props.review.photos)}</div>
        <br />
        <span>{parseReview.recommend(props.review.recommend)}</span>
        <br />
        <span>{parseReview.name(props.review.reviewer_name)}</span>
        <br />
        <div>{parseReview.response(props.review.response)}</div>
        <br />
        <div>{parseReview.helpfulness(props.review.helpfulness)}</div>
      </div>
    </li>
  );
};

export default ReviewTile;
