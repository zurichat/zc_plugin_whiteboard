import React from "react";
import icon from "./assets/settings.png"
import avatar from "./assets/avatar.png"
import "./SearchBar.css"

const SearchBar = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search here"
        className="search-input"
      />
      <img className="search-icon" alt="search" src={icon} />
      <img className="search-avatar" alt="avatar" src={avatar} />
    </div>
  )
}

export default SearchBar;