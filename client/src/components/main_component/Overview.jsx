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
      productReview: [],
      allPhotos: [],
      allUrls: [],
      allThumbUrls: [],
      selected: "",
      average: 0,
      idx: 0,
      height: 0,
      width: 0,
      count: 0,
      page: 0,
      favorite: false,
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
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleQtyChange = this.handleQtyChange.bind(this);
    this.downArrowOnClick = this.downArrowOnClick.bind(this);
    this.upArrowOnClick = this.upArrowOnClick.bind(this);
    this.leftArrowOnClick = this.leftArrowOnClick.bind(this);
    this.rightArrowOnClick = this.rightArrowOnClick.bind(this);
    this.showModalClick = this.showModalClick.bind(this);
    this.thumbnailOnClick = this.thumbnailOnClick.bind(this);
    this.closeModalClick = this.closeModalClick.bind(this);
    this.addToCartPost = this.addToCartPost.bind(this);
    this.getPhotosUrl = this.getPhotosUrl.bind(this);
    this.handleStyleChange = this.handleStyleChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.productId !== prevProps.productId) {
      this.getStyleData(this.props.productId);
      this.getReviewData(this.props.productId);
    }
  }

  addToCartPost = (e) => {
    let skuId;
    let skuPost;
    // create object with current sz/qty state
    const shoppingData = {
      size: this.state.selectedSizeOption,
      quantity: this.state.selectedQtyOption,
    };
    // iterate through all skus
    for (let key in this.state.styleSkus) {
      // compare to find corresponding sku to POST
      if (this.state.styleSkus[key].size === shoppingData.size) {
        skuPost = {
          sku_id: key,
        };
      }
    }
    axios
      .post("/cart", skuPost)
      .then((cartData) => {
        // console.log("SUCCESS", cartData);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  getStyleData = (id) => {
    // use current product id to pull it's styles to client, use data to update state
    axios
      .get(`/products/${id}/styles`)
      .then((styleData) => {
        this.setState({
          styles: styleData.data,
          allStyles: styleData.data.results,
        });
        // iterate to find the default style and use respective data to update state
        for (let i = 0; i < this.state.styles.results.length; i++) {
          if (this.state.styles.results[i]["default?"] === true) {
            this.setState({
              currentStyle: this.state.styles.results[i],
              styleSkus: this.state.styles.results[i].skus,
              allPhotos: this.state.styles.results[i].photos,
              selected: this.state.styles.results[i].style_id,
              currentRadio: true,
            });
          }
        }
        this.getPhotosUrl();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // pulls review data from current product && set sets state
  getReviewData = (id) => {
    axios
      .get(`/reviews?product_id=${id || 37311}&count=100`)
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

  getPhotosUrl = () => {
    let tempThumb = [];
    let tempUrl = [];
    this.state.allPhotos.forEach((x) => {
      tempThumb.push(x.thumbnail_url);
      tempUrl.push(x);
    });
    this.setState(
      {
        allThumbUrls: tempThumb,
        allUrls: tempUrl,
      },
      () => {}
    );
  };

  showModalClick = (e) => {
    this.setState({
      modal: true,
    });
  };

  closeModalClick = (e) => {
    if (this.state.modal === true) {
      this.setState({
        modal: false,
      });
    }
  };

  styleOnClick = (selection, index, e) => {
    e.preventDefault();
    // update style based on event target
    this.setState(
      {
        currentStyle: selection,
        allPhotos: selection.photos,
        selected: Number(e.target.id),
      },
      () => {
        this.getPhotosUrl();
      }
    );
  };

  handleStyleChange = (e) => {
    this.setState({
      selected: Number(e.target.id),
    });
  };

  // recursive click event for thumbnails -- works for moderate amount of image files
  // time complexity wise -- safe to assume wont scale for bigN
  thumbnailOnClick = (index, e) => {
    e.stopPropagation();
    e.preventDefault();
    const recurse = (target, children) => {
      children = children || this.state.allUrls.slice();
      let currentSrc = children[0].thumbnail_url;
      if (target.src === currentSrc) {
        this.setState(
          {
            allUrls: children,
          },
          () => {}
        );
        return;
      }
      if (target.src !== currentSrc) {
        let el = children.shift();
        children.push(el);
        children = children.flat();
        children.forEach((x) => {
          if (x.thumbnail_url === target.src) {
            let imgIndex = children.indexOf(x);
            this.setState(
              {
                idx: imgIndex,
              },
              () => {}
            );
          }
        });
        recurse(target, children);
      }
    };
    recurse(e.target);
  };

  // updates index of current photo using ticker algorithm
  upArrowOnClick = (e) => {
    let children = this.state.allUrls.slice();
    let lastEl = children.pop();
    children.unshift(lastEl);
    children = children.flat();
    // index state tracker, updates MainImage && ImgModal -- cycles through array
    let idx = this.state.idx;
    if (idx == 0) {
      this.setState({
        allUrls: children,
      });
    }
  };

  // reverse logic of this.upArrowOnClick
  downArrowOnClick = (e) => {
    let children = this.state.allUrls.slice();
    let firstEl = children.shift();
    children.push(firstEl);
    children = children.flat();
    let idx = this.state.idx;
    if (idx == this.state.currentStyle.photos.length - 1) {
      idx = 0;
    }
    this.setState({
      idx,
      allUrls: children,
    });
  };

  // right and left click events - stopProp to prevent closing modal when open
  rightArrowOnClick = (e) => {
    e.stopPropagation();
    this.downArrowOnClick();
  };

  leftArrowOnClick = (e) => {
    e.stopPropagation();
    this.upArrowOnClick();
  };

  getAverage = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  };

  // update state of size and quantity
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
      <div className="overviewmain" onClick={(e) => this.closeModalClick(e)}>
        <MainImage
          currentStyle={this.state.currentStyle}
          leftClick={this.leftArrowOnClick}
          rightClick={this.rightArrowOnClick}
          toggleModal={this.showModalClick}
          idxTicker={this.state.idx}
          height={this.state.height}
          width={this.state.width}
          photoLinks={this.state.allUrls}
        />
        <ImgModal
          currentStyle={this.state.currentStyle}
          upClick={this.upArrowOnClick}
          downClick={this.downArrowOnClick}
          leftClick={this.leftArrowOnClick}
          rightClick={this.rightArrowOnClick}
          galleryClick={this.modalGalleryClick}
          modalState={this.state.modal}
          idxTicker={this.state.idx}
          thumbnailClick={this.thumbnailOnClick}
          photoLinks={this.state.allThumbUrls}
          thumbLinks={this.state.allUrls}
        />
        <Gallery
          currentStyle={this.state.currentStyle}
          upClick={this.upArrowOnClick}
          downClick={this.downArrowOnClick}
          thumbnailClick={this.thumbnailOnClick}
          thumbLinks={this.state.allUrls}
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
          rightClick={this.rightArrowOnClick}
          selected={this.state.selected}
          styleChange={this.handleStyleChange}
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

