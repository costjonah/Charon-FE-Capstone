import React from "react";
import StarRatings from "react-star-ratings";

class Rating extends React.Component {
  changeRating(newRating, name) {
    this.setState({
      rating: newRating,
    });
  }

  render() {
    return (
      <StarRatings
        rating={this.state.rating}
        starRatedColor="blue"
        changeRating={this.changeRating}
        numberOfStars={5}
        name="rating"
      />
    );
  }
}

export default Rating;
