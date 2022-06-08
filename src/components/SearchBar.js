import React from "react";
import "./SearchBar.css";
import useState from "react";

/* Add everything related to searching & filtering the data*/
const SearchBar = () => {
  const [data, setData] = useState([]);

  <form action="/" method="get">
    <label htmlFor="header-search">
      <div className="searchbar-label">
        <b> Github Search Feature</b>
      </div>
    </label>
    <input type="text" id="" placeholder="Search github" name="s" />
    <button type="submit">Search</button>
  </form>;
};

export default SearchBar;
