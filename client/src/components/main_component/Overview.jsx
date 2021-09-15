import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import ProductInfo from "./product_information/ProductInfo.jsx";
import Review from "./product_information/OV_Review.jsx";
import FreeForm from "./product_information/FreeForm.jsx";
import BrandLogos from "./product_information/BrandLogos.jsx";

import StyleSelector from "./style_selector/StyleSelector.jsx";

import MainImage from "./image_gallery/MainImage.jsx";
import Gallery from "./image_gallery/GalleryView.jsx";

import SizeSelector from "./add_to_cart/SizeSelect.jsx";
import QuantitySelector from "./add_to_cart/QuantitySelect.jsx";
import AddToCart from "./add_to_cart/AddToCart.jsx";

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
      hover: false,
      toggleZoom: false,
      styleSkus: {},
      selectedSizeOption: null,
      selectedQtyOption: null,
    };

    this.getStyleData = this.getStyleData.bind(this);
    this.getReviewData = this.getReviewData.bind(this);
    this.getAverage = this.getAverage.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.zoomOnClick = this.zoomOnClick.bind(this);
    this.imageMouseOver = this.imageMouseOver.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleQtyChange = this.handleQtyChange.bind(this);
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
        // for (var i = 0; i < this.state.styles.results.length; i++) {
        //   if (this.state.styles.results[i]["default?"] === true) {
        //     this.setState({
        //       currentStyle: this.state.styles.results[i],
        //       styleSkus: this.state.styles.results[i].skus,
        //     });
        //   }
        // }
        this.setState({
          currentStyle: this.state.styles.results[2],
          styleSkus: this.state.styles.results[2].skus,
        });
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

  onMouseOver = () => {
    this.setState({
      hover: true,
    });
  };

  onMouseOut = () => {
    this.setState({
      hover: false,
    });
  };

  zoomOnClick = () => {
    this.setState({
      toggleZoom: !this.state.toggleZoom,
    });
  };

  imageMouseOver = () => {
    if (this.state.toggleZoom !== true) {
      this.setState({
        toggleZoom: true,
      });
    } else {
      this.setState({
        toggleZoom: false,
      });
    }
  };

  getAverage = (array) => {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  };

  handleSizeChange = (selectedSz) => {
    this.setState({ selectedSizeOption: selectedSz.value });
    console.log(`Size option selected:`, selectedSz);
  };

  handleQtyChange = (selectedQty) => {
    this.setState({ selectedQtyOption: selectedQty.value });
    console.log(`Quantity option selected:`, selectedQty);
  };

  render() {
    var nameStyle = {
      display: this.state.hover ? "block" : "none",
    };
    return (
      <div className="overviewmain">
        <MainImage
          currentStyle={this.state.currentStyle}
          zoom={this.state.toggleZoom}
          imageMouseOut={this.imageMouseOut}
        />
        <Gallery currentStyle={this.state.currentStyle} />
        <ProductInfo
          products={this.props.products}
          productId={this.props.productId}
          currentStyle={this.state.currentStyle}
        />
        <Review
          reviewdata={this.state.productReview}
          averageFunc={this.getAverage}
          average={this.state.average}
          count={this.state.count}
        />
        <StyleSelector
          styles={this.state.styles}
          currentstyle={this.state.currentStyle}
          hover={this.state.hover}
          mouseOver={this.onMouseOver}
          mouseOut={this.onMouseOut}
          zoom={this.state.toggleZoom}
          zoomClick={this.zoomOnClick}
        />

        <SizeSelector
          styleSkus={this.state.styleSkus}
          handleSizeChange={this.handleSizeChange}
          selectedSizeOption={this.state.selectedSizeOption}
        />
        <QuantitySelector
          styleSkus={this.state.styleSkus}
          handleQtyChange={this.handleQtyChange}
          selectedSizeOption={this.state.selectedSizeOption}
          selectedQtyOption={this.state.selectedQtyOption}
        />

        <AddToCart />
        <FreeForm
          products={this.props.products}
          productId={this.props.productId}
        />
        <BrandLogos />
      </div>
    );
  }
}

export default Overview;
