import { useState, createContext } from "react";

const quoteObject = [{ anime: "", character: "", quote: "" }];

// First we need to create our context
const SearchBarContext = createContext(null);

// createContext returns 2 things. Provider and Consumer. We will only need Provider
const searchInput = "";
const finalSearchTerm = "naruto";

const SearchBarContextProvider = ({ children }) => {
  const [finalSearchTerm, setFinalSearchTerm] = useState(searchInput);

  const handleSearch = (searchInput) => {
    setFinalSearchTerm(searchInput);
  };

  return (
    <SearchBarContext.Provider value={{ handleSearch, finalSearchTerm }}>
      {children}
    </SearchBarContext.Provider>
  );
};

export default SearchBarContextProvider;
