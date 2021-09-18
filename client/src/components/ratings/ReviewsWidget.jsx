import React from 'react';
import ReviewsList from './ReviewsList/ReviewsList.jsx';
import RatingsBreakdown from './RatingsBreakdown/RatingsBreakdown.jsx';
import SortOptions from './SortOptions/SortOptions.jsx';
import AddReview from './AddReview/AddReview.jsx';
const axios = require('axios');

class ReviewsWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      recommended: {},
      ratings: {},
      characteristics: {},
      filter: [],
      sortOption: 'Relevant',
    };
    this.handleClick = this.handleClick.bind(this);
    this.helpful = this.helpful.bind(this);
    this.report = this.report.bind(this);
    this.filterBy = this.filterBy.bind(this);
    this.removeAllFilters = this.removeAllFilters.bind(this);
    this.sort = this.sort.bind(this);
    this.sortFunctions = {
      Relevant: (a, b) => {},
      Helpful: (a, b) => {
        return b.helpfulness - a.helpfulness;
      },
      Newest: (a, b) => {
        return new Date(b.date) - new Date(a.date);
      },
    };
  }

  handleClick() {
    this.props.showMoreReviews();
  }

  sort(option) {
    this.setState({
      sortOption: option,
    });
  }

  helpful(reviewId) {
    axios
      .put(`/reviews/${reviewId}/helpful`)
      .then((res) => {
        axios
          .get(`/reviews?product_id=${this.props.product.id}`)
          .then((res) => {
            this.setState({
              reviews: res.data.results,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  report(reviewId) {
    axios
      .put(`/reviews/${reviewId}/report`)
      .then((res) => {
        axios
          .get(`/reviews?product_id=${this.props.product.id}`)
          .then((res) => {
            this.setState({
              reviews: res.data.results,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  filterBy(starRating) {
    let filter = this.state.filter.slice();
    if (filter.indexOf(starRating) === -1) {
      filter.push(starRating);
    } else {
      filter.splice(filter.indexOf(starRating), 1);
    }
    filter.sort();
    console.log('filter: ', filter);
    this.setState({ filter: filter });
  }

  removeAllFilters() {
    this.setState({
      filter: [],
    });
  }

  recommendedPercentages() {
    let yes = parseInt(this.state.recommended.true);
    let no = parseInt(this.state.recommended.false);
    let totalRecommendations = yes + no;
    let yesPercent = Math.round((yes / totalRecommendations) * 1000) / 10;
    let noPercent = Math.round((no / totalRecommendations) * 1000) / 10;
    return yesPercent;
  }

  render() {
    this.recommendedPercentages();
    let button = null;
    if (this.props.reviewCount < this.state.reviews.length) {
      button = <button onClick={this.handleClick}>More Reviews</button>;
    }
    let sortBy = this.sortFunctions[this.state.sortOption];
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <RatingsBreakdown
          ratings={this.state.ratings}
          filterBy={this.filterBy}
          filter={this.state.filter}
          removeAllFilters={this.removeAllFilters}
          recommended={this.recommendedPercentages()}
        />
        <SortOptions sort={this.sort} />
        <div>
          <ReviewsList
            reviews={this.state.reviews}
            count={this.props.reviewCount}
            helpful={this.helpful}
            report={this.report}
            filter={this.state.filter}
            sortFunction={sortBy}
          />
          {button}
          <AddReview
            product={this.props.product}
            characteristics={this.state.characteristics}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios
      .get(`/reviews?product_id=${this.props.product.id || 37311}`)
      .then((res) => {
        this.setState({
          reviews: res.data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`/reviews/meta?product_id=${this.props.product.id || 37311}`)
      .then((res) => {
        this.setState({
          recommended: res.data.recommended,
          ratings: res.data.ratings,
          characteristics: res.data.characteristics,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product !== this.props.product) {
      axios
        .get(`/reviews?product_id=${this.props.product.id}`)
        .then((res) => {
          this.setState({
            reviews: res.data.results,
          });
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .get(`/reviews/meta?product_id=${this.props.product.id}`)
        .then((res) => {
          this.setState({
            recommended: res.data.recommended,
            ratings: res.data.ratings,
            characteristics: res.data.characteristics,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}

export default ReviewsWidget;
