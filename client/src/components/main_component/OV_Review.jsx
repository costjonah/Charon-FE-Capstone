import React from "react";
import Select from "react-select";
import Stars from "../common/Stars.jsx";

const Review = (props) => {
  // console.log("REVIEWPROPS:", props);
  let reviewData = props.reviewdata;
  let count = props.count;
  if (count > 0) {
    let numOfReviews = 0;
    let ratings = [];
    for (var i = 0; i < reviewData.length; i++) {
      ratings.push(reviewData[i].rating);
      numOfReviews++;
    }
    let averageRating = props.averageFunc(ratings);
    if (numOfReviews > 0) {
      return (
        <div>
          {" "}
          <Stars rating={averageRating} />
          <div data={reviewData}>
            <a>Read all {numOfReviews} reviews</a>
          </div>
        </div>
      );
    } else {
      return <div data={reviewData}></div>;
    }
  } else {
    return (
      <div>
        <br />
      </div>
    );
  }
};

export default Review;
