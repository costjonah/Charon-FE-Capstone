import React from "react";
import { fetchProductList } from "./service/products";

import Outfits from "./Outfits";
import Products from "./Products";
import "./productList.css";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      outfitProducts: [],
    };
  }

  async componentDidMount() {
    try {
      const res = await fetchProductList();
      // console.log("res is: ", res);
      this.setState({
        productList: res,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const handleClickProduct = (product) => {
      // console.log("productid", product.id);
      this.props.selectProduct(product.id);
    };
    const handleRemoveProductFromOutfits = (product) => {
      this.setState({
        outfitProducts: this.state.outfitProducts.filter(
          (item) => item.id !== product.id
        ),
      });
    };
    const handleClickOutFit = (product) => {
      // console.log("add", product);
      const exist = this.state.outfitProducts.find(
        (item) => item.id === product.id
      );
      if (!exist) {
        this.setState({
          outfitProducts: [...this.state.outfitProducts, product],
        });
      }
    };

    return (
      <div className="gs-product-wrapper">
        <Products
          productList={this.state.productList}
          handleClickOutFit={handleClickOutFit}
          handleClickProduct={handleClickProduct}
        />
        <Outfits
          outfitProducts={this.state.outfitProducts}
          handleRemoveProductFromOutfits={handleRemoveProductFromOutfits}
        />
      </div>
    );
  }
}

export default ProductList;
