import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbardiv">
        <ul id="navul">
          <li id="navli">
            <a href="#"><FontAwesomeIcon icon={faUser} id="navuser"/>{' '}Sign In</a>
          </li>
          <li id="navli">
            <a href="#"><FontAwesomeIcon icon={faHeart} id="navfav"/>{' '}Favorites</a>
          </li>
          <li id="navli">
            <a href="#"><FontAwesomeIcon icon={faShoppingBag} id="navbag"/>{' '}Shopping Bag</a>
          </li>
          <li id="navli">
            <a href="#"><FontAwesomeIcon icon={faEnvelope} id="navmail"/>{' '}Contact</a>
          </li>
          <SearchBar />
        </ul>
      </div>
    );
  }
};

export default Navbar;
