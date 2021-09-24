import React from "react";
import { fetchProductList } from "./service/products";

import Outfits from "./Outfits";
import Products from "./Products";
import "./productList.css";

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      outfitProducts: [],
    };
  }

  check(move) {
    const nextBtn = document.getElementById("next-btn");
    const preBtn = document.getElementById("pre-btn");
    const cards = document.querySelectorAll(".card-container .card");
    if (move > 0) {
      preBtn.classList.remove("hidden");
    }
    if (move + 3 < cards.length) {
      nextBtn.classList.remove("hidden");
    }
    if (move === 0) {
      // console.log("hidden previous button...");
      preBtn.classList.add("hidden");
    }
    if (move + 3 === cards.length) {
      nextBtn.classList.add("hidden");
    }
  }

  pre() {
    const cards = document.querySelectorAll(".card-container .card");
    const card = cards[0];
    const realWidth = card.offsetWidth;
    const cardContainer = document.querySelector(".card-container");
    let move = this.state.move;
    if (move > 0) {
      cardContainer.scrollTo((move - 1) * Number(realWidth * 1.5), 0);
      this.setState({
        move: move - 1,
      });
      this.check(move - 1);
    }
  }

  next() {
    const cards = document.querySelectorAll(".card-container .card");
    const cardContainer = document.querySelector(".card-container");
    const card = cards[0];
    const realWidth = card.offsetWidth;
    let _move = this.state.move;
    if (_move + 3 < cards.length) {
      cardContainer.scrollTo((_move + 1) * Number(realWidth * 1.5), 0);
      this.setState({
        move: _move + 1,
      });
      this.check(_move + 1);
    }
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
      console.log("productid", product.id);
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
