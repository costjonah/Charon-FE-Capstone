import React from "react";
import { Link } from "react-router-dom";
// import "./navigation.css";

class Navigation extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="nav-bar-container">
                    <div className="nav-menu">
                        <div className="nav-item">
                            <Link to="/">Home</Link>
                        </div>
                        <div className="nav-item">
                            <Link to="/related-products">Related Products</Link>
                        </div>
                        <div className="nav-item">
                            <Link to="/about-us">About Us</Link>
                        </div>
                    </div>
                    <div className="action-pane">
                        <div className="nav-item">
                            <Link to="/about-us">Sign In</Link>
                        </div>
                        <div className="nav-item">
                            <Link to="/about-us">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;