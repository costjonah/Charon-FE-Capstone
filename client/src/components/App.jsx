import React from 'react';
import ReactDOM from 'react-dom';
import ReviewsWidget from './ratings/ReviewsWidget.jsx';
import TEMPPRODUCTS from './TEMPPRODUCTS.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../components/common/Navigation.jsx';
import Overview from '../components/main_component/Overview.jsx';
import QuestionsList from './Questions&Answers/QuestionsList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProduct: { id: 0 },
      reviewCount: 2,
      productId: '0',
      productInfo: [],
      productName: '',
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
      .get('/products')
      .then((productData) => {
        this.setState({
          productInfo: productData.data,
          productId: productData.data[0].id,
          productName: productData.data[0].name,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <h1 id='header'>The Right Fit</h1>

          <Navbar />

          {/* <Overview
            products={this.state.productInfo}
            productId={this.state.productId}
          />
          <h1>Questions And Answers</h1>
          <div className='QuestionAndAnswerBody'>
            <QuestionsList
              currentProduct={this.state.productId}
              productName={this.state.productName}
            />
          </div> */}
          <ReviewsWidget
            product={this.state.currentProduct}
            reviewCount={this.state.reviewCount}
            showMoreReviews={this.showMoreReviews}
          />
          <TEMPPRODUCTS
            products={this.state.products}
            selectProduct={this.selectProduct}
          />
        </div>
      </BrowserRouter>
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
          productId: this.state.products[i].id,
          reviewCount: 2,
        });
      }
    }
  }

  componentDidMount() {
    axios
      .get('/products?page=1&count=10')
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
  }
}

export default App;
