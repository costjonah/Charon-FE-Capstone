import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchEnter = this.onSearchEnter.bind(this);
  }

  onSearchEnter = (e) => {
    // incomplete function
    if (e.charCode === 13) {
      e.preventDefault();
      onSearch(e.target.value);
      e.target.value = "";
      e.target.blur();
    }
  };

  render() {
    return (
      <div className="navbardiv">
        <nav className="navbar navbar--fixed-top">
          <div className="navbar__inner">
            <div className="navbar__items">
              <div className="navbardiv">
                <li id="navli">
                  <a href="#">
                    <FontAwesomeIcon icon={faUser} id="navuser" /> Sign In
                  </a>
                </li>
                <li id="navli">
                  <a href="#">
                    <FontAwesomeIcon icon={faHeart} id="navfav" /> Favorites
                  </a>
                </li>
                <li id="navli">
                  <a href="#">
                    <FontAwesomeIcon icon={faShoppingBag} id="navbag" />{" "}
                    Shopping Bag
                  </a>
                </li>
                <li id="navli">
                  <a href="#">
                    <FontAwesomeIcon icon={faEnvelope} id="navmail" /> Contact
                  </a>
                </li>
                <SearchBar search={this.onSearchEnter} />
              </div>
              <div
                aria-label="Navigation bar toggle"
                className="navbar__toggle"
                role="button"
                tabIndex="0"
              ></div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
