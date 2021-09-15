import React from 'react';
import { Link } from "react-router-dom";
import './productCard.css';


class ProductCard extends React.Component {

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    {this.props.product.name}
                </div>
                <div className="card-body">
                    <div className="product-detail">
                        <div className="item">
                            <div className="label">Category</div>
                            <div className="item-value">
                                {this.props.product.category}
                            </div>
                        </div>
                        <div className="item">
                            <div className="label">Price</div>
                            <div className="item-value text-danger font-weight-bold">
                                $ {this.props.product.default_price}
                            </div>
                        </div>
                    </div>
                    {this.props.product.description}
                </div>
                <div className="card-footer footer-info">
                    <div className="created-date">
                        {this.props.product.created_at}
                    </div>
                    <div>
                        <Link to={`/product/${this.props.product.id}/detail`}>Detail</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductCard;