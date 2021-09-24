import React from "react";

const SearchBar = (props) => {
  return (
    <input
      type="text"
      className="searchBar"
      placeholder="Enter item to search"
      onKeyPress={(e) => e.key === "Enter" && props.search(e)}
    />
  );
};

export default SearchBar;
