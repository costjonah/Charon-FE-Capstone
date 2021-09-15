import React from 'react';
const parseReview = require('./parseReview.js');
import Body from './TileComponents/Body.jsx';
import Rating from './TileComponents/Rating.jsx';
import ReviewDate from './TileComponents/ReviewDate.jsx';
import Summary from './TileComponents/Summary.jsx';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let review = this.props.review;

    let summaryHead = review.summary;
    let summaryTail = '';
    if (review.summary.length >= 60) {
      summaryHead = summary.substring(0, 60) + '...';
      summaryTail = '...' + summary.substring(60);
    }

    return (
      <li style={{ listStyleType: 'none' }}>
        <div style={{ borderStyle: 'solid' }}>
          <div>
            <Rating rating={review.rating} />
            <ReviewDate reviewDate={review.date} />
          </div>
          <Summary summaryHead={summaryHead} />
          <br />
          <Body summaryTail={summaryTail} body={review.body} />
          <div>{parseReview.photos(this.props.review.photos)}</div>
          <br />
          <span>{parseReview.recommend(this.props.review.recommend)}</span>
          <br />
          <span>{parseReview.name(this.props.review.reviewer_name)}</span>
          <br />
          <div>{parseReview.response(this.props.review.response)}</div>
          <br />
          <div>{parseReview.helpfulness(this.props.review.helpfulness)}</div>
        </div>
      </li>
    );
  }
}

export default ReviewTile;
