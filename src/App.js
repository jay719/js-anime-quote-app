import React, { useCallback, useEffect, useState } from "react";
import "./styles/App.css";
import DisplayCards from "./mainComponents/DisplayCards";
import { searchForNewQuoteApiCall } from "./helperFunctions/apiCalls";
import SearchBarContextProvider from "./helperFunctions/searchBarContext";
import Header from "./mainComponents/Header";

function App() {
  const [searchInput, setSearch] = useState("");
  const [finalSearchTerm, setFinalSearchTerm] = useState(searchInput);

  const cardCallbackApiRequest = useCallback(() => {
    searchForNewQuoteApiCall(searchInput);
  }, [searchInput]);

  // useEffect(() => {
  //   cardCallbackApiRequest();
  // }, [cardCallbackApiRequest]);
  return (
    <div className="home">
      {/* <SearchBarContextProvider> */}
      <Header />
      {/* <DisplayCards /> */}

      {/* </SearchBarContextProvider> */}
    </div>
  );
}

export default App;
