import React from "react";
import { fetchProduct } from "./service/products";
import "./productDetail.css";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  async componentDidMount() {
    const productId = this.props.match.params.id;
    const res = await fetchProduct(productId);
    console.log("res", res);
    if (res instanceof Object) {
      this.setState({
        product: res,
      });
    }
  }

  showDetail = (product) => {
    if (product) {
      // console.log("product is: ", product);
      let productPhoto = '';
      try {
        productPhoto =
          product &&
          Array.isArray(product.styles) &&
          product.styles[0] &&
          product.styles[0].photos[0].url;
      } catch {

      }
      return (
        <div className="detail-card">
          <div className="card-header">{this.state.product.name}</div>
          <div className="card-body">
            <div className="row-group">
              {productPhoto && (
                <img src={productPhoto} className="detailPhoto" />
              )}
            </div>
            <div className="row-group">
              <label className="label">Name</label>
              <div className="item">{this.state.product.name}</div>
            </div>
            <div className="row-group">
              <label className="label">Category</label>
              <div className="item">{this.state.product.category}</div>
            </div>
            <div className="row-group">
              <label className="label">Campus</label>
              <div className="item">{this.state.product.campus}</div>
            </div>
            <div className="row-group">
              <label className="label">Slogan</label>
              <div className="item">{this.state.product.slogan}</div>
            </div>
            <div className="row-group">
              <label className="label">Price</label>
              <div className="item">{this.state.product.default_price}</div>
            </div>
            <div className="row-group">
              <label className="label">Description</label>
              <div className="item">{this.state.product.description}</div>
            </div>
            <div className="row-group">
              <label className="label">Created Date</label>
              <div className="item">{this.state.product.created_at}</div>
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="product-detail-container">
        {this.showDetail(this.state.product)}
      </div>
    );
  }
}

export default ProductDetail;