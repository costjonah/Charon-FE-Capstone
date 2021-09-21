const BASE_URL_PREFFIX = "";
export const getProductAverageScore = async (productID) => {
  const res = await fetch(`${BASE_URL_PREFFIX}/reviews/${productID}`);
  const data = await res.json();
  const reviews = data && data.results;
  console.log("reviews", reviews);
  let averageScore = 0,
    sumScore = 0;
  sumScore = reviews.reduce((prev, next) => {
    return prev + next.rating;
  }, 0);
  console.log(
    "---",
    averageScore,
    sumScore,
    reviews.length,
    sumScore / reviews.length
  );
  averageScore = sumScore / reviews.length;
  return averageScore;
};
