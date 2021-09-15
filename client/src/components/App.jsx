import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');
import ReviewsWidget from './ratings/ReviewsWidget.jsx';
import TEMPPRODUCTS from './TEMPPRODUCTS.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProduct: { id: 0 },
      reviewCount: 2,
    };
    this.selectProduct = this.selectProduct.bind(this);
    this.showMoreReviews = this.showMoreReviews.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Project Catwalk</h1>
        <TEMPPRODUCTS
          products={this.state.products}
          selectProduct={this.selectProduct}
        />
        <ReviewsWidget
          product={this.state.currentProduct}
          reviewCount={this.state.reviewCount}
          showMoreReviews={this.showMoreReviews}
        />
      </div>
    );
  }

  showMoreReviews() {
    let newCount = this.state.reviewCount + 2;
    this.setState({
      reviewCount: newCount,
    });
  }

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

  componentDidMount() {
    axios
      .get('/products')
      .then((res) => {
        this.setState({
          products: res.data,
          currentProduct: res.data[0],
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

export default App;
