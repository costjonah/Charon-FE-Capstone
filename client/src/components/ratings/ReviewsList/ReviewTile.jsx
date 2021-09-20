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
import styled from 'styled-components';

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
      summaryHead = review.summary.substring(0, 60) + '...';
      summaryTail = '...' + review.summary.substring(60);
    }

    return (
      <StyledTile className='noBullet'>
        <div>
          <div>
            <Rating rating={review.rating} />
            <div>
              <Name name={review.reviewer_name} />
              <ReviewDate reviewDate={review.date} />
            </div>
          </div>
          <Summary summaryHead={summaryHead} />
          <Body summaryTail={summaryTail} body={review.body} />
          <Photos photos={review.photos} />
          <Recommend recommend={review.recommend} />
          <Response response={review.response} />
          <Helpfulness
            helpfulness={review.helpfulness}
            id={review.review_id}
            helpful={this.props.helpful}
            report={this.props.report}
          />
        </div>
      </StyledTile>
    );
  }
}

const StyledTile = styled.li`
  border-bottom: 1px solid;
`;

export default ReviewTile;
