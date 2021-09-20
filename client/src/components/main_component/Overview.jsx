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
import ImgModal from "./image_gallery/ImgModal.jsx";

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
      currentPhoto: "",
      productReview: [],
      average: 0,
      idx: 0,
      height: 0,
      width: 0,
      toggleZoom: false,
      styleSkus: {},
      selectedSizeOption: null,
      selectedQtyOption: null,
      modal: false,
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
    this.rightArrowOnClick = this.rightArrowOnClick.bind(this);
    this.showModalClick = this.showModalClick.bind(this);
    this.closeModalClick = this.closeModalClick.bind(this);
    this.addToCartPost = this.addToCartPost.bind(this);
    this.getImgSize = this.getImgSize.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.productId !== prevProps.productId) {
      this.getStyleData(this.props.productId);
      this.getReviewData(this.props.productId);
    }
  }

  addToCartPost = (e) => {
    var skuId;
    var skuPost;
    var shoppingData = {
      size: this.state.selectedSizeOption,
      quantity: this.state.selectedQtyOption,
    };
    for (var key in this.state.styleSkus) {
      if (this.state.styleSkus[key].size === shoppingData.size) {
        skuPost = {
          sku_id: key,
        };
      }
    }
    axios
      .post("/cart", skuPost)
      .then((cartData) => {
        //console.log("SUCCESS", cartData);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

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
              currentPhoto: this.state.styles.results[i].photos[0].url,
            });
            this.getImgSize(this.state.styles.results[i].photos[0].url);
          }
        }
        var defaultCheck = document.querySelector("#radio0");
        defaultCheck.style.visibility = "visible";
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

  showModalClick = (e) => {
    var mainViews = document.querySelectorAll(
      ".mainimg, .galthumbs, #uparrow, #downarrow, #rightarrow, #curCateg, #curName, #newPrice, #curPrice, #sizeselect > div, #qtyselect > div, .star-ratings, #styleul, .cartbtn, .brandlogomain, .freeformmain, #readreviews, #expandbtn"
    );
    mainViews.forEach((x) => {
      x.style.opacity = "0";
    });
    this.setState({
      modal: true,
    });
    var defaultImg = document.querySelector(".mainimg");
    if (defaultImg.style.opacity === "0") {
      defaultImg.style.cursor = "default";
    }
  };

  closeModalClick = (e) => {
    var appBody = document.querySelector(".app");
    if (this.state.modal === true) {
      this.setState({
        modal: false,
      });
      var mainViews = document.querySelectorAll(
        ".mainimg, .galthumbs, #uparrow, #downarrow, #rightarrow, #curCateg, #curName, #newPrice, #curPrice, #sizeselect > div, #qtyselect > div, .star-ratings, #styleul, .cartbtn, .brandlogomain, .freeformmain, #readreviews, #expandbtn"
      );
      mainViews.forEach((x) => {
        x.style.opacity = "1";
      });
      var defaultImg = document.querySelector(".mainimg");
      if (defaultImg.style.opacity === "1") {
        defaultImg.style.cursor = "zoom-in";
      }
    }
  };

  getImgSize = (img) => {
    img = document.getElementsByClassName("mainimg");
    var imgHeight = img.clientHeight;
    var imgWidth = img.clientWidth;
    this.setState({
      height: imgHeight,
      width: imgWidth,
    });
  };

  styleOnClick = (selection, index, e) => {
    e.preventDefault();
    this.setState({
      currentStyle: selection,
      currentPhoto: selection.photos[0].url,
      idx: 0,
    });
    //console.log(this.state.currentPhoto);
    var allChecks = document.querySelectorAll(".checked");
    var currentCheck = document.querySelector("#radio" + index);

    for (var i = 0; i < allChecks.length; i++) {
      allChecks[i].style.visibility = "hidden";
    }
    currentCheck.style.visibility = "visible";
  };

  zoomOnClick = () => {
    this.setState({
      toggleZoom: !this.state.toggleZoom,
    });
  };

  upArrowOnClick = (e) => {
    var children = document.querySelectorAll(".thumbnails");
    var lastEl = Array.prototype.slice.call(children, 0, children.length - 1);
    var ul = document.querySelector(".galthumbs");
    while (lastEl.length > 0) {
      ul.appendChild(lastEl.shift());
    }
    let idx = this.state.idx;
    if (idx == 0) {
      idx = this.state.currentStyle.photos.length - 1;
    } else {
      idx--;
    }
    this.setState({
      idx,
    });
  };

  downArrowOnClick = (e) => {
    var children = document.querySelectorAll(".thumbnails");
    var firstEl = Array.prototype.slice.call(children, 0, 1);
    var ul = document.querySelector(".galthumbs");
    while (firstEl.length > 0) {
      ul.appendChild(firstEl.shift());
    }
    let idx = this.state.idx;
    if (idx == this.state.currentStyle.photos.length - 1) {
      idx = 0;
    } else {
      idx++;
    }
    this.setState({
      idx,
    });
  };

  rightArrowOnClick = (e) => {
    this.downArrowOnClick();
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
    //console.log(`Size option selected:`, selectedSz);
  };

  handleQtyChange = (selectedQty) => {
    this.setState({ selectedQtyOption: selectedQty.value });
    //console.log(`Quantity option selected:`, selectedQty);
  };

  render() {
    return (
      <div className="overviewmain" onClick={(e) => this.closeModalClick(e)}>
        <MainImage
          currentStyle={this.state.currentStyle}
          zoom={this.state.toggleZoom}
          imageMouseOut={this.imageMouseOut}
          rightClick={this.rightArrowOnClick}
          toggleModal={this.showModalClick}
          currentPhoto={this.state.currentPhoto}
          idxTicker={this.state.idx}
          height={this.state.height}
          width={this.state.width}
        />
        <ImgModal
          modalState={this.state.modal}
          currentPhoto={this.state.currentPhoto}
          idxTicker={this.state.idx}
          currentStyle={this.state.currentStyle}
          rightClick={this.rightArrowOnClick}
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

        <AddToCart postCart={this.addToCartPost} />
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
