import React from "react";
import { fetchProductList } from '../service/products';
import ProductCard from './ProductCard';
import './productList.css';

class ProductList extends React.Component {

    constructor() {
        super();
        this.state = {
            productList: [],
            move: 0
        };
    }

    check(move) {
        // let move = this.state.move;
        const nextBtn = document.getElementById("next-btn");
        const preBtn = document.getElementById("pre-btn");
        const cards = document.querySelectorAll(".card-container .card");
        console.log("move is: ", move);
        if (move > 0) {
            preBtn.classList.remove("hidden");
        } 
        if (move + 3 < cards.length) {
            nextBtn.classList.remove("hidden");
        } 
        if (move === 0) {
            console.log("hidden previous button...");
            preBtn.classList.add("hidden");
        } 
        if (move + 3 === cards.length) {
            nextBtn.classList.add("hidden");
        }
    }

    pre() {
        const cardContainer = document.querySelector(".card-container");
        let move = this.state.move;
        if (move > 0) {
            cardContainer.scrollTo((move - 1) * 390, 0);
            this.setState({
                move: move - 1
            });
            this.check(move - 1);
        }
    }

    next() {
        const cards = document.querySelectorAll(".card-container .card");
        const cardContainer = document.querySelector(".card-container");
        let _move = this.state.move
        if (_move + 3 < cards.length) {
            cardContainer.scrollTo((_move + 1) * 390, 0);
            this.setState({
                move: _move + 1
            })
            this.check(_move + 1);
        }
    }

    async componentDidMount() {
        const res = await fetchProductList();
        // console.log("res is: ", res);
        this.setState({
            productList: res.productList
        });
        this.check(0);
    }

    render() {
        return (
            <div className="slide-container">
                <div className="left" id="pre-btn" onClick={() => this.pre()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </div>
                <div className="card-container">
                    {
                        this.state.productList.map((item, index) => {
                            return <ProductCard key={index} product={item} />
                        })
                    }
                </div>
                <div className="right" id="next-btn" onClick={() => this.next()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
            </div>
        );
    }
}

export default ProductList;