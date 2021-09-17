import React from 'react';
import RatingSummary from './BreakdownComponents/RatingSummary.jsx';
import Breakdown from './BreakdownComponents/Breakdown.jsx';
import Recommendations from './BreakdownComponents/Recommendations.jsx';

class RatingsBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      averageRating: 0,
      totalRatings: 0,
    };
  }

  findRatings(ratings) {
    let totalRatings = 0;
    let totalStars = 0;
    for (var stars in ratings) {
      totalRatings += parseInt(ratings[stars]);
      totalStars += parseInt(ratings[stars]) * parseInt(stars);
    }
    let result = {
      averageRating: Math.round((totalStars / totalRatings) * 10) / 10,
      totalRatings: totalRatings,
    };
    return result;
  }

  render() {
    return (
      <div>
        <RatingSummary
          averageRating={this.state.averageRating}
          totalRatings={this.state.totalRatings}
        />
        <Breakdown />
        <Recommendations />
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      averageRating: this.findRatings(this.props.ratings).averageRating,
      totalRatings: this.findRatings(this.props.ratings).totalRatings,
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        averageRating: this.findRatings(this.props.ratings).averageRating,
        totalRatings: this.findRatings(this.props.ratings).totalRatings,
      });
    }
  }
}

export default RatingsBreakdown;
