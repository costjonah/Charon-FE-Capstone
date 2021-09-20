import React from "react";

const SearchBar = (props) => {
  return (
    <input
      type="text"
      className="searchBar"
      placeholder="Enter item to search"
      onKeyPress={props.search}
    />
  );
};

export default SearchBar;
