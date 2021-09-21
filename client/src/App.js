import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import ProductList from './RelatedProducts/ProductList';
import ProductDetail from './RelatedProducts/ProductDetail';
import AboutUs from './AboutUs/Index';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Navigation />
                <Switch>
                    <Route exact path="/related-products" component={ProductList}/>
                    <Route exact path="/product/:id/detail" component={ProductDetail}/>
                    <Route path="/about-us" component={AboutUs}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;