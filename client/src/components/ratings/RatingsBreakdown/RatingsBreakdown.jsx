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
      ratingsPer: {},
    };
    this.handleRemoveFilters = this.handleRemoveFilters.bind(this);
    this.findRatings = this.findRatings.bind(this);
  }

  findRatings(ratings) {
    let totalRatings = 0;
    let totalStars = 0;
    let ratingsPer = {};
    for (var stars in ratings) {
      totalRatings += parseInt(ratings[stars]);
      totalStars += parseInt(ratings[stars]) * parseInt(stars);
    }
    for (var stars in ratings) {
      let ratingsPercentage = parseInt(ratings[stars]) / totalRatings;
      ratingsPer[stars] = Math.round(ratingsPercentage * 100);
    }
    let result = {
      averageRating: Math.round((totalStars / totalRatings) * 10) / 10,
      totalRatings: totalRatings,
      ratingsPer: ratingsPer,
    };
    return result;
  }

  handleRemoveFilters() {
    this.props.removeAllFilters();
  }

  render() {
    let filterBy = null;
    let removeFilters = null;
    if (this.props.filter.length > 0) {
      filterBy = <span>Filter by: </span>;
      removeFilters = (
        <span style={{ color: 'blue' }} onClick={this.handleRemoveFilters}>
          Remove all filters
        </span>
      );
    }

    return (
      <div>
        <RatingSummary
          averageRating={this.state.averageRating}
          totalRatings={this.state.totalRatings}
        />
        <Breakdown
          ratingsPer={this.state.ratingsPer}
          filterBy={this.props.filterBy}
        />
        <div>
          {filterBy}
          {this.props.filter.map((filter, index) => {
            return <span key={index}>{(index ? ', ' : '') + filter}</span>;
          })}
        </div>
        {removeFilters}
        <Recommendations />
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      averageRating: this.findRatings(this.props.ratings).averageRating,
      totalRatings: this.findRatings(this.props.ratings).totalRatings,
      ratingsPer: this.findRatings(this.props.ratings).ratingsPer,
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        averageRating: this.findRatings(this.props.ratings).averageRating,
        totalRatings: this.findRatings(this.props.ratings).totalRatings,
        ratingsPer: this.findRatings(this.props.ratings).ratingsPer,
      });
    }
  }
}

export default RatingsBreakdown;
