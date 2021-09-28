import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footerdiv">
        <nav className="footer footer--fixed-bottom">
          <div className="footer__inner">
            <div className="footer__items">
              <div className="footerdiv">
                <li id="footli">
                  <a href="https://github.com/costjonah">
                    <FontAwesomeIcon icon={faGithub} id="Jonah_Overview" />
                    {' '}costjonah
                  </a>
                </li>
                <li id="footli">
                  <a href="https://github.com/EndlessDavidDu">
                    <FontAwesomeIcon
                      icon={faGithub}
                      id="David_RelatedProducts"
                    />
                     {' '}EndlessDavidDu
                  </a>
                </li>
                <li id="footli">
                  <a href="https://github.com/jamestsui3">
                    <FontAwesomeIcon
                      icon={faGithub}
                      id="James_QuestionsAnswers"
                    />
                     {' '}jamestsui3
                  </a>
                </li>
                <li id="footli">
                  <a href="https://github.com/ch987">
                    <FontAwesomeIcon
                      icon={faGithub}
                      id="Chris_RatingsReviews"
                    />
                    {' '}ch987
                  </a>
                </li>
              </div>
              <div
                aria-label="Footer bar toggle"
                className="footer__toggle"
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

export default Footer;
