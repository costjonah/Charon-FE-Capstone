import React from "react";
import { fetchProductList, ProductListid } from "./service/products";
import ProductCard from "./ProductCard";
import "./productList.css";

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      productid: [],
      outfitProducts: [],
      move: 0,
    };
  }

  check(move) {
    const nextBtn = document.getElementById("next-btn");
    const preBtn = document.getElementById("pre-btn");
    const cards = document.querySelectorAll(".card-container .card");
    console.log("move is: ", move);
    if (move > 0) {
      preBtn.classList.remove("hidden");
    }
    if (move + 3 < cards.length) {
      nextBtn.classList.remove("hidden");
    }
    if (move === 0) {
      console.log("hidden previous button...");
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

      const listid = await ProductListid();
      console.log("listed is:", listid)

      const res = await fetchProductList();
      // console.log("res is: ", res);
      this.setState({
        productList: res,
        productid: listid,
      });
    } catch (err) {
      console.log(err);
    }
    this.check(0);
  }

  render() {
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
    const renderOutFitProducts = () => {
      if (
        !Array.isArray(this.state.outfitProducts) ||
        this.state.outfitProducts.length <= 0
      )
        return null;
      const OutfitProducts = this.state.outfitProducts.map((product) => {
        return (
          <ProductCard
            handleRemoveProductFromOutfits={handleRemoveProductFromOutfits}
            outfit={true}
            key={product.id}
            product={product}
          />
        );
      });
      return <div className="outfit-products">{OutfitProducts}</div>;
    };
    return (
      <div className="gs-product-wrapper">
        <div className="slide-container">
          <div className="left" id="pre-btn" onClick={() => this.pre()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
          </div>
          <div className="card-container">
            {this.state.productList.map((item, index) => {
              return (
                <ProductCard
                  key={index}
                  listid={this.state.productid[index]}
                  product={item}
                  handleClickOutFit={handleClickOutFit}
                />
              );
            })}
          </div>

          <div className="right" id="next-btn" onClick={() => this.next()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
        </div>
        {renderOutFitProducts()}
      </div>
    );
  }
}

export default ProductList;
