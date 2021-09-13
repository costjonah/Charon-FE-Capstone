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
    };
    this.selectProduct = this.selectProduct.bind(this);
  }

  render() {
    return (
      <div>
        <TEMPPRODUCTS
          products={this.state.products}
          selectProduct={this.selectProduct}
        />
        <ReviewsWidget product={this.state.currentProduct} />
      </div>
    );
  }

  selectProduct(id) {
    for (var i = 0; i < this.state.products.length; i++) {
      if (this.state.products[i].id === parseInt(id)) {
        this.setState({
          currentProduct: this.state.products[i],
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
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
