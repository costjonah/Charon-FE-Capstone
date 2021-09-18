import React from 'react';
import ReviewsList from './ReviewsList/ReviewsList.jsx';
import RatingsBreakdown from './RatingsBreakdown/RatingsBreakdown.jsx';
const axios = require('axios');

class ReviewsWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      recommended: {},
      ratings: {},
      filter: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.helpful = this.helpful.bind(this);
    this.report = this.report.bind(this);
    this.filterBy = this.filterBy.bind(this);
    this.removeAllFilters = this.removeAllFilters.bind(this);
  }

  handleClick() {
    this.props.showMoreReviews();
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

  render() {
    let button = null;
    if (this.props.reviewCount < this.state.reviews.length) {
      button = <button onClick={this.handleClick}>More Reviews</button>;
    }
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <RatingsBreakdown
          recommended={this.state.recommended}
          ratings={this.state.ratings}
          filterBy={this.filterBy}
          filter={this.state.filter}
          removeAllFilters={this.removeAllFilters}
        />
        <div>
          <ReviewsList
            reviews={this.state.reviews}
            count={this.props.reviewCount}
            helpful={this.helpful}
            report={this.report}
            filter={this.state.filter}
          />
          {button}
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
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}

export default ReviewsWidget;
