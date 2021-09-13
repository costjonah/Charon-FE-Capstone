import React from 'react';
import ReviewsList from './ReviewsList/ReviewsList.jsx';
const axios = require('axios');

class ReviewsWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  render() {
    return (
      <div>
        <div>Hello</div>
        <ReviewsList reviews={this.state.reviews} />
      </div>
    );
  }

  componentDidMount() {
    axios
      // .get(`/reviews?product_id=37311`)
      .get(`/reviews?product_id=${this.props.product.id || 37311}`)
      .then((res) => {
        console.log(res);
        this.setState({
          reviews: res.data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product !== this.props.product) {
      console.log('updated', prevProps.product, this.props.product);
      axios
        .get(`/reviews?product_id=${this.props.product.id}`)
        .then((res) => {
          console.log('res', res.data.results);
          this.setState({
            reviews: res.data.results,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}

export default ReviewsWidget;
