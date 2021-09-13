import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import Review from './OV_Review.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: [],
      styles: [],
      reviewMeta: [],
      average: 0,
      productId: [],
      count: 0,
      page: 0,

    };
    this.getProductData = this.getProductData.bind(this);
    this.getStyleData = this.getStyleData.bind(this);
    this.getReviewData = this.getReviewData.bind(this);
    this.getAverage = this.getAverage.bind(this);
  };

  componentDidMount() {
    this.getProductData();
    this.getStyleData();
    this.getReviewData();
  };

  getProductData = () => {
    axios.get('/products')
      .then((productData) => {
        this.setState({
          productInfo: productData.data,
        });
        productData.data.map((data) => {
          this.setState({
            productId: data.id
          })
        })
        console.log(this.state.productId)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getStyleData = (id) => {
    axios.get(`/products/37311/styles`)
      .then((styleData) => {
        this.setState({
          styles: styleData.data,
        });
        console.log('STYLE', this.state.styles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getReviewData = (id) => {
    axios.get(`/reviews/37311`)
      .then((reviewData) => {
        this.setState({
          reviewMeta: reviewData.data.results,
          count: reviewData.data.count,
          page: reviewData.data.page
        });
        console.log(this.state.reviewMeta)
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
        <ProductInfo products={this.state.productInfo}/>
        <Review
        metadata={this.state.reviewMeta}
        averageFunc={this.getAverage}
        average={this.state.average}
        />
        <StyleSelector styles={this.state.styles}/>
      </div>
    );
  }
};

export default Overview;
