import React from "react";
import "./SearchBar.css";
import { useState } from "react";
import axios from "axios";

/* Add everything related to searching & filtering the data*/

const SearchBar = () => {
  // const [data, setData] = useState([]);

  const [userInput, setUserInput] = useState("");

  const changeValue = (value) => {
    setUserInput(value);
    console.log(process.env.REACT_APP_API_KEY);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInput);
    axios
      .get(`https://api.github.com/search/users?q=${userInput}`, {
        // auth: process.env.REACT_APP_API_KEY,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="header-search">
        <div className="searchbar-label">
          <b> Github Search Feature</b>
        </div>
      </label>
      <input
        onChange={(event) => changeValue(event.target.value)}
        value={userInput}
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
