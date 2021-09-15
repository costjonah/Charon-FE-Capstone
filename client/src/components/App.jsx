import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/common/Navigation.jsx";
import Overview from "../components/main_component/Overview.jsx";

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
          productId: productData.data[3].id,
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
          <h1 id="header">Project Catwalk</h1>
          <Navbar />

          <Overview
            products={this.state.productInfo}
            productId={this.state.productId}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
