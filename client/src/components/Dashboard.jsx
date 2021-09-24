import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App.jsx";
import ProductDetail from "./RelatedProducts/ProductDetail.js";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/product/:id/detail" component={ProductDetail} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Dashboard;
