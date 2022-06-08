import React from "react";
import "./SearchBar.css";
import { useState } from "react";

/* Add everything related to searching & filtering the data*/

const SearchBar = () => {
  // const [data, setData] = useState([]);

  const [userInput, setUserInput] = useState("");

  const changeValue = (value) => {
    setUserInput(value);
    console.log(userInput);
  };

  return (
    <form action="/" method="get">
      <label htmlFor="header-search">
        <div className="searchbar-label">
          <b> Github Search Feature</b>
        </div>
      </label>
      <input
        onChange={(event) => changeValue(event.target.value)}
        type="text"
        id=""
        placeholder="Search github"
        name="s"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
