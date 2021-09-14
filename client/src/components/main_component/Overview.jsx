import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import styled from 'styled-components'
import ProductInfo from "./ProductInfo.jsx";
import StyleSelector from "./StyleSelector.jsx";
import Review from "./OV_Review.jsx";
import FreeForm from "./FreeForm.jsx";

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
      currentStyle: {},
      productReview: [],
      average: 0,
      count: 0,
      page: 0,
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
        for (var i = 0; i < this.state.styles.results.length; i++) {
          if (this.state.styles.results[i]["default?"] === true) {
            this.setState({
              currentStyle: this.state.styles.results[i],
            });
          }
        }
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
        <MainStyle>
        <ProductInfoStyle>
        <ProductInfo
          products={this.props.products}
          productId={this.props.productId}
          currentStyle={this.state.currentStyle}
        />
       </ProductInfoStyle>
       <ReviewStyle>
        <Review
          reviewdata={this.state.productReview}
          averageFunc={this.getAverage}
          average={this.state.average}
          count={this.state.count}
        />
        </ReviewStyle>
        <SelectorStyle>
        <StyleSelector styles={this.state.styles} />
        </SelectorStyle>
        <FreeFormStyle>
        <FreeForm
          products={this.props.products}
          productId={this.props.productId}
        />
        </FreeFormStyle>
        </MainStyle>
      </div>
    );
  }
}

const MainStyle = styled.div`

  display: flex;
  order: 1;
  flex-grow: 1;
`
const ProductInfoStyle = styled.div`
 display: flex;
 flex-direction: column;
 flex-grow: 1;
 order: 2;
`
const ReviewStyle = styled.div`
display: flex;
  flex-wrap: wrap;
  margin: 10%;
`
const SelectorStyle = styled.div`
  display: flex;
  flex-grow: 3;
`
const FreeFormStyle = styled.div`
  display: flex;
  height: 25%;
`

export default Overview;
