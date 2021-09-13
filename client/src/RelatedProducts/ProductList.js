import React from "react";
import { fetchProductList } from '../service/products';
import ProductCard from './ProductCard';
import './productList.css';

class ProductList extends React.Component {

    constructor() {
        super();
        this.state = {
            productList: []
        };
    }

    async componentDidMount() {
        const res = await fetchProductList();
        // console.log("res is: ", res);
        this.setState({
            productList: res.productList
        });
    }

    render() {
        return (
            <div className="product-list">
                {
                    this.state.productList.map((item, index) => {
                        return <ProductCard key={index} product={item} />
                    })
                }
            </div>
        );
    }
}

export default ProductList;