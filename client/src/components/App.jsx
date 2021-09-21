import React from "react";
import axios from "axios";

import Navbar from "../components/common/Navigation.jsx";
import Overview from "../components/main_component/Overview.jsx";
import ProductList from "../components/RelatedProducts/ProductList";
import QuestionsList from "../components/Questions&Answers/QuestionsList.jsx";
import ReviewsWidget from "../components/ratings/ReviewsWidget.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProduct: { id: 0 },
      reviewCount: 2,
      productId: "0",
      productInfo: [],
      productName: "",
    };
    this.selectProduct = this.selectProduct.bind(this);
    this.showMoreReviews = this.showMoreReviews.bind(this);
    this.getProductData = this.getProductData.bind(this);
  }

  componentDidMount() {
    this.getProductData();
  }

  getProductData = () => {
    axios
      .get("/products?page=1&count=10")
      .then((res) => {
        this.setState({
          products: res.data,
          productInfo: res.data,
          currentProduct: res.data[0],
          productId: res.data[0].id,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  selectProduct(id) {
    for (var i = 0; i < this.state.products.length; i++) {
      if (this.state.products[i].id === parseInt(id)) {
        this.setState({
          currentProduct: this.state.products[i],
          reviewCount: 2,
        });
      }
    }
  }

  showMoreReviews() {
    let newCount = this.state.reviewCount + 2;
    this.setState({
      reviewCount: newCount,
    });
  }

  render() {
    return (
      <div>
        <h1 id="header">The Right Fit</h1>
        <Navbar />
        <Overview
          products={this.state.productInfo}
          productId={this.state.productId}
        />
        <ProductList />
        <h1>Questions And Answers</h1>
        <div className="QuestionAndAnswerBody">
          <QuestionsList
            currentProduct={this.state.productId}
            productName={this.state.productName}
          />
        </div>
        <ReviewsWidget
          product={this.state.currentProduct}
          reviewCount={this.state.reviewCount}
          showMoreReviews={this.showMoreReviews}
        />
      </div>
    );
  }
}

export default App;
