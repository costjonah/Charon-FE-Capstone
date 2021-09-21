import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Dashboard from './dashboard/Dashboard'
import ProductDetail from './RelatedProducts/ProductDetail'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/product/:id/detail' component={ProductDetail} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
