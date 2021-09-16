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
      allStyles: [],
      currentStyle: {},
      productReview: [],
      average: 0,
      count: 0,
      page: 0,
      toggleZoom: false,
      styleSkus: {},
      selectedSizeOption: null,
      selectedQtyOption: null,
    };

    this.getStyleData = this.getStyleData.bind(this);
    this.getReviewData = this.getReviewData.bind(this);
    this.getAverage = this.getAverage.bind(this);
    this.styleOnClick = this.styleOnClick.bind(this);
    this.zoomOnClick = this.zoomOnClick.bind(this);
    this.imageMouseOver = this.imageMouseOver.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleQtyChange = this.handleQtyChange.bind(this);
    this.downArrowOnClick = this.downArrowOnClick.bind(this);
    this.upArrowOnClick = this.upArrowOnClick.bind(this);
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
          allStyles: styleData.data.results,
        });

        for (var i = 0; i < this.state.styles.results.length; i++) {
          if (this.state.styles.results[i]["default?"] === true) {
            this.setState({
              currentStyle: this.state.styles.results[i],
              styleSkus: this.state.styles.results[i].skus,
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  setDefaultStyle = () => {};

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

  styleOnClick = (selection, e) => {
    e.preventDefault();
    this.setState({
      currentStyle: selection,
    });
  };

  zoomOnClick = () => {
    this.setState({
      toggleZoom: !this.state.toggleZoom,
    });
  };

  downArrowOnClick = (e) => {
    var children = document.querySelectorAll(".thumbnails");
    var firstEl = Array.prototype.slice.call(children, 0, 1);
    var ul = document.querySelector(".galthumbs");
    while (firstEl.length > 0) {
      ul.appendChild(firstEl.shift());
    }
  };

  upArrowOnClick = (e) => {
    var children = document.querySelectorAll(".thumbnails");
    var lastEl = Array.prototype.slice.call(children, 0, children.length - 1);
    var ul = document.querySelector(".galthumbs");
    while (lastEl.length > 0) {
      ul.appendChild(lastEl.shift());
    }
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
    return (
      <div className="overviewmain">
        <MainImage
          currentStyle={this.state.currentStyle}
          zoom={this.state.toggleZoom}
          imageMouseOut={this.imageMouseOut}
        />
        <Gallery
          currentStyle={this.state.currentStyle}
          upClick={this.upArrowOnClick}
          downClick={this.downArrowOnClick}
        />
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
          currentStyle={this.state.currentStyle}
          styleClick={this.styleOnClick}
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
