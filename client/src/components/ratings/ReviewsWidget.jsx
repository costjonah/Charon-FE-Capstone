import React from 'react';
import ReviewsList from './ReviewsList/ReviewsList.jsx';
const axios = require('axios');

class ReviewsWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      recommended: {
        false: 0,
        true: 0,
      },
      ratings: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      },
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state.reviews);
    this.props.showMoreReviews();
  }

  render() {
    let button = null;
    if (this.props.reviewCount < this.state.reviews.length) {
      button = <button onClick={this.handleClick}>More Reviews</button>;
    }
    return (
      <div>
        <ReviewsList
          reviews={this.state.reviews}
          count={this.props.reviewCount}
        />
        {button}
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
