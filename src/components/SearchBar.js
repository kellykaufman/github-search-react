import React from "react";

/* Add everything related to searching & filtering the data*/
const SearchBar = () => (
  <form action="/" method="get">
    <label htmlFor="header-search">
      <div>Github Search Feature</div>
    </label>
    <input type="text" id="" placeholder="Search github" name="s" />
    <button type="submit">Search</button>
  </form>
);

export default SearchBar;
