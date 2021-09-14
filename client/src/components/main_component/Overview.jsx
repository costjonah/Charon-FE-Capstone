import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ProductInfo from "./ProductInfo.jsx";
import StyleSelector from "./StyleSelector.jsx";
import Review from "./OV_Review.jsx";

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
      productReview: [],
      average: 0,
      count: 0,
      page: 0
    };

    this.getStyleData = this.getStyleData.bind(this);
    this.getReviewData = this.getReviewData.bind(this);
    this.getAverage = this.getAverage.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.productId !== prevProps.productId) {
      this.getStyleData(this.props.productId);
      this.getReviewData(this.props.productId);
    }
  }

  getStyleData = (id) => {
    axios
      .get(`/products/${id}/styles`)
      .then((styleData) => {
        this.setState({
          styles: styleData.data,
        });
        console.log("STYLE", this.state.styles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getReviewData = (id) => {
    axios
      .get(`/reviews?product_id=${id}`)
      .then((reviewData) => {
        this.setState({
          productReview: reviewData.data.results,
          count: reviewData.data.count,
          page: reviewData.data.page,
        });
        console.log("DATA", this.state.productReview);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getAverage = (array) => {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  };

  render() {
    return (
      <div>
        <h2>Main Component</h2>
        <ProductInfo products={this.props.productInfo} />
        <Review
          reviewdata={this.state.productReview}
          averageFunc={this.getAverage}
          average={this.state.average}
          count={this.state.count}
        />
        <StyleSelector styles={this.state.styles} />
      </div>
    );
  }
}

export default Overview;
