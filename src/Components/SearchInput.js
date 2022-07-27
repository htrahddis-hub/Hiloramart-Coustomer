import React from "react";
import "../Styles/Components/SearchInput.css";
import search_icon from "../Assets/Images/search.svg";
function SearchInput() {
  return (
    <div className="search-input-cont">
      <div>
        <img src={search_icon} className="search_icon" />
      </div>
      <div>
        <input placeholder="Seacrh here" className="search-input" />
      </div>
    </div>
  );
}

export default SearchInput;
