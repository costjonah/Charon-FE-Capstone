import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App.jsx";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Dashboard;
