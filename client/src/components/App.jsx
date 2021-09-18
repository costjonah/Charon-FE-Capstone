import React from 'react';
import ReactDOM from 'react-dom';
import Overview from '../main_component/Overview.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: "0",
      productInfo: [],
    };
    this.getProductData = this.getProductData.bind(this);
  }

  componentDidMount() {
    this.getProductData();
  }

  getProductData = () => {
    axios
      .get("/products")
      .then((productData) => {
        this.setState({
          productInfo: productData.data,
          productId: productData.data[0].id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
    <div>
      <h1>Project Catwalk</h1>
      <Overview />
    </div>
    )
  }
}

export default App;
