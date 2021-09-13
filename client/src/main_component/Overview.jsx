import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: [],
      productId: '',
      styles: [],
      reviewMeta: []
    };
    this.getProductData = this.getProductData.bind(this);
    this.getStyleData = this.getStyleData.bind(this);
    this.getReviewData = this.getReviewData.bind(this);
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getStyleData = (id) => {
    axios.get(`/products/37311/styles`)
      .then((styleData) => {
        this.setState({
          styles: styleData.data.results,
        });
        console.log(this.state.styles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getReviewData = (id) => {
    axios.get(`/reviews`)
      .then((reviewData) => {
        console.log(reviewData)
        // this.setState({
        //   reviewMeta: reviewData.data.results,
        // });
        // console.log(this.state.reviewMeta);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h2>Main Component</h2>
        <ProductInfo products={this.state.productInfo}/>
        <StyleSelector styles={this.state.styles}/>
      </div>
    );
  }
};

export default Overview;
