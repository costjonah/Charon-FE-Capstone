import React from "react";
import StarRatings from "react-star-ratings";
import Rating from "./Rating.jsx";

class Stars extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StarRatings
        rating={this.props.rating}
        starDimension="40px"
        starSpacing="15px"
      />
    );
  }
}

export default Stars;
