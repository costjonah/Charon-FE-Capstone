import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import "./productCard.css";
import {
  fetchCurrentProduct,
  fetchProduct,
  fetchRelatedProductIDs,
} from "./service/products";
import { getProductAverageScore } from "./service/reviews";
import RatingStar from "./RatingStar";

class ProductCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      currentProduct: null,
      selectedProduct: null,
      averagScore: 0,
      relatedProduct: null,
    };
  }

  async openModal(selectedProductId) {
    // console.log("selected product id is: ", selectedProductId);
    const currentRes = await fetchCurrentProduct();
    const selectedRes = await fetchProduct(selectedProductId);

    this.setState({
      isOpen: true,
      currentProduct: currentRes.currentProduct,
      selectedProduct: selectedRes,
    });
  }

  closeModal() {
    this.setState({
      isOpen: false,
    });
  }
  componentDidMount() {
    const productID = this.props.product.id;
    getProductAverageScore(productID).then((averagScore) => {
      this.setState({
        averagScore,
      });
    });
    fetchRelatedProductIDs(productID).then(async (productIDs) => {
      if (Array.isArray(productIDs)) {
        const oneID = productIDs[0];
        const relatedProduct = await fetchProduct(oneID);
        console.log(relatedProduct);
        this.setState({
          relatedProduct,
        });
      }
    });
  }
  render() {
    const handleClickOutFit = () => {
      this.props.handleClickOutFit(this.props.product);
    };
    const handleRemoveProductFromOutfits = () => {
      this.props.handleRemoveProductFromOutfits(this.props.product);
    };
    const modalHeaderContent = () => {
      return <div>Product1 VS Product2</div>;
    };
    const relatedProduct = this.state.relatedProduct || null;

    const relatedProductPhoto =
      relatedProduct &&
      Array.isArray(relatedProduct.styles) &&
      relatedProduct.styles[0].photos[0].thumbnail_url;

    const modalBodyContent = () => {
      const { currentProduct, selectedProduct } = this.state;
      // console.log("body: ", currentProduct, selectedProduct);
      if (currentProduct && selectedProduct) {
        return (
          <div className="comparing-container">
            <table>
              <thead>
                <tr>
                  <th>Attribute/Name</th>
                  <th>{currentProduct.name}</th>
                  <th>{selectedProduct.name}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Campus</td>
                  <td>{currentProduct.campus}</td>
                  <td>{selectedProduct.campus}</td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>{currentProduct.category}</td>
                  <td>{selectedProduct.category}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{currentProduct.default_price}</td>
                  <td>{selectedProduct.default_price}</td>
                </tr>
                <tr>
                  <td>Slogan</td>
                  <td>{currentProduct.slogan}</td>
                  <td>{selectedProduct.slogan}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }
    };

    const modalFooterContent = () => {
      return (
        <div className="tool-bar">
          <button className="btn" onClick={this.closeModal.bind(this)}>
            Close
          </button>
        </div>
      );
    };

    return (
      <div>
        <Modal
          open={this.state.isOpen}
          modalHeader={modalHeaderContent()}
          modalBody={modalBodyContent()}
          modalFooter={modalFooterContent()}
          closeModal={this.closeModal.bind(this)}
        />
        <div className="card">
          <div className="card-header">{this.props.product.name}</div>
          <div className="card-body">
            <div className="product-detail">
              <div className="item">
                <div className="label">Category</div>
                <div className="item-value">{this.props.product.category}</div>
              </div>
              <div className="item">
                <div className="label">Price</div>
                <div className="item-value text-danger font-weight-bold">
                  $ {this.props.product.default_price}
                </div>
              </div>
            </div>
            {this.props.product.description}
            {relatedProduct && (
              <div className="related-products">
                <Link to={`/product/${relatedProduct.id}/detail`}>
                  <h3>Related Products</h3>
                  <img className="related-image" src={relatedProductPhoto} />
                </Link>
              </div>
            )}
          </div>
          <div className="rating">
            <RatingStar ratingScore={this.state.averagScore} />
          </div>
          <div className="card-footer footer-info">
            <div className="created-date">{this.props.product.created_at}</div>
            <div className="card-btn-group">
              <a onClick={() => {
                console.log(this.props)
                this.openModal(this.props.product.id)
              }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </a>
              <Link to={`/product/${this.props.product.id}/detail`}>
                Detail
              </Link>
              {!this.props.outfit && <a onClick={handleClickOutFit}>Outfit</a>}
              {this.props.outfit && (
                <a onClick={handleRemoveProductFromOutfits}>Remove</a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
