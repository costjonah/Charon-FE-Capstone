import React from 'react';
import Body from './TileComponents/Body.jsx';
import Rating from './TileComponents/Rating.jsx';
import ReviewDate from './TileComponents/ReviewDate.jsx';
import Summary from './TileComponents/Summary.jsx';
import Photos from './TileComponents/Photos.jsx';
import Recommend from './TileComponents/Recommend.jsx';
import Name from './TileComponents/Name.jsx';
import Response from './TileComponents/Response.jsx';
import Helpfulness from './TileComponents/Helpfulness.jsx';

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
          <Body summaryTail={summaryTail} body={review.body} />
          <Photos photos={review.photos} />
          <Recommend recommend={review.recommend} />
          <Name name={review.name} />
          <Response response={review.response} />
          <Helpfulness helpfulness={review.helpfulness} />
        </div>
      </li>
    );
  }
}

export default ReviewTile;
