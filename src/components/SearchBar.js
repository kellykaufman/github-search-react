import React from "react";
import "./SearchBar.css";
import { useState } from "react";
import axios from "axios";

/* Add everything related to searching & filtering the data*/

const SearchBar = () => {
  // const [data, setData] = useState([]);

  const [userInput, setUserInput] = useState("");
  const [items, setItems] = useState([]);

  const changeValue = (value) => {
    setUserInput(value);
    // console.log(process.env.REACT_APP_API_KEY);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInput);
    axios
      .get(`https://api.github.com/search/users?q=${userInput}`, {
        // I can't figure out how to pull back specific endpoints
        // auth: process.env.REACT_APP_API_KEY,
      })
      .then((res) => {
        setItems(res.data.items);
        console.log(res.data.items);
      });
  };
  console.log(items);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="header-search">
          <div className="searchbar-label">
            <b> Github Search User</b>
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

      {items.map((item) => {
        const getUserData = () => {
          axios
            .get(`https://api.github.com/users/${item.login}`, {
              headers: {
                Authorization:
                  "Bearer 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",
              },
            })
            .then((res) => {
              console.log(res);
            });
        };
        getUserData();

        return (
          <div className="user-info">
            <div style={{ color: "white" }}>{item.login}</div>
            <img
              alt="user avatar"
              height={30}
              style={{ borderRadius: 50 }}
              src={item.avatar_url}
            />
          </div>
        );
      })}
    </>
  );
};

export default SearchBar;