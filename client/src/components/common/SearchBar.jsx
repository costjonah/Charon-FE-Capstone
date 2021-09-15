import React from 'react';

const SearchBar = (props) => {

  const onSearchEnter = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
      onSearch(e.target.value);
      e.target.value = '';
      e.target.blur();
    }
  };

  return (
    <input
      type='text'
      className='searchBar'
      placeholder='Enter item to search'
      onKeyPress={onSearchEnter}
      style={{backgroundImage: 'url(./images/search.png)' }}
    />
  );
};

export default SearchBar;