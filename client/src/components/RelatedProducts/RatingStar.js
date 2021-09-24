import React from "react";
import { halfStar } from "./assets/half-star";
import { fullStar } from "./assets/full-star";
const RatingStar = ({ ratingScore }) => {
  if (isNaN(ratingScore)) {
    return <div style={{ width: "100%", height: "5vh" }}></div>;
  }
  const starWidth = "1vw";
  const fullStarCount = Math.floor(ratingScore);
  // console.log('ratingScore', ratingScore)
  // console.log('fullStarCount', fullStarCount)
  const renderFullStar = () => {
    return new Array(fullStarCount)
      .fill(1)
      .map((item, index) => (
        <img key={index} src={fullStar} style={{ width: starWidth }} />
      ));
  };
  const renderHalfStar = () => {
    const remainingScore = ratingScore - fullStarCount;

    if (remainingScore < 0.5) {
      return <div style={{ display: "flex", padding: "10px 20px" }}></div>;
    } else {
      return (
        <img
          key={fullStarCount + 1}
          src={halfStar}
          style={{ width: starWidth }}
        />
      );
    }
  };
  return (
    <div style={{ display: "flex", height: "5vh", alignItems: "center" }}>
      {renderFullStar()}
      {renderHalfStar()}
    </div>
  );
};

export default RatingStar;
