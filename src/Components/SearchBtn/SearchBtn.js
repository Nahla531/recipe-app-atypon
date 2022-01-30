import React from "react";
import "./SearchBtn.css";
const SearchBtn = ({ onClick, label }) => {
  return (
    <button className="btn" type="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default SearchBtn;
