import React from "react";
import "../Styles/Components/SearchInput.css";
import search_icon from "../Assets/Images/search.svg";
import HistoryIcon from "@mui/icons-material/History";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const handelChange = (e) => {
    setSearch(e.target.value);
  };

  const handleDropdown = () => {
    setDropdown((old) => !old);
  };

  const handleSubmit = () => {
    navigate(`search/${search}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="search-input-cont">
      <div onClick={handleSubmit}>
        <img src={search_icon} className="search_icon" />
      </div>
      <div onClick={handleDropdown}>
        <input
          placeholder="Seacrh here"
          className="search-input"
          value={search}
          onChange={handelChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      {dropdown && (
        <div className="dropbox px-1">
          <div className="d-flex p-3 justify-content-between align-items-center">
            <div className="d-flex">
              <HistoryIcon /> <div className="ms-3">Shoes</div>
            </div>{" "}
            <CloseIcon fontSize="small" />
          </div>
          <div className="d-flex px-3 justify-content-between align-items-center">
            <div className="d-flex">
              <HistoryIcon /> <div className="ms-3">Detector machine</div>
            </div>{" "}
            <CloseIcon fontSize="small" />
          </div>
          <div className="d-flex p-3 justify-content-between align-items-center">
            <div className="d-flex">
              <HistoryIcon /> <div className="ms-3">Laptop</div>
            </div>{" "}
            <CloseIcon fontSize="small" />
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchInput;
