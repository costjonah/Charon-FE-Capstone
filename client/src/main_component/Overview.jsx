import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: {}
    };
  this.getProductData = this.getProductData.bind(this);
  }

  componentDidMount() {
    this.getProductData();
  }

  getProductData = () => {
    axios.get('/products')
      .then((productData) => {
        console.log('OVLINE22: ', productData);
        this.setState({
          productInfo: productData
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
    <div>
      <h2>Main Component</h2>
    </div>
    )
  }
};

export default Overview;