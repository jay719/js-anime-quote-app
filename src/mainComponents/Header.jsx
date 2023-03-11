import React, { useContext, useState } from "react";
import { RiSearchEyeLine } from "react-icons/ri";
import SearchBarContextProvider from "../helperFunctions/searchBarContext";
import "../styles/Header.css";

export default function Header() {
  // const { handleSearch } = useContext(SearchBarContextProvider);
  const [searchInput, setSearch] = useState("");
  const [finalSearchTerm, setFinalSearchTerm] = useState(searchInput);

  const handleSearch = (searchInput) => {
    setFinalSearchTerm(searchInput);
  };
  const handleTyping = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="home-header">
      <div className="search-bar">
        <input
          id="name"
          type="text"
          value={searchInput}
          placeholder={"Find a quote now"}
          onChange={handleTyping}
          aria-label="quote-input"
          data-testid={"search-bar"} // slight controversy on using these
        ></input>
        <RiSearchEyeLine onClick={handleSearch} />
      </div>
    </div>
  );
}
