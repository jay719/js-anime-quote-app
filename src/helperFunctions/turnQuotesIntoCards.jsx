import { AiOutlineHeart } from "react-icons/ai";
import "../styles/HelperFunctions.css";
import React from "react";

export const turnQuotesIntoCards = (quotes) => {
  let i = 0;
  //good reminder, .forEach will only iterate through the array but map returns a new one we can render
  const quoteCards = quotes.map((quoteObject) => {
    const author = quoteObject.character;
    const body = quoteObject.quote;
    console.log(author, "author");
    return (
      <div className={"card"}>
        <div className="quote-info">
          <h3> {`${body}`}</h3>
          <h3>{`${author}`} </h3>
        </div>
        <div className="fav-button">
          <h2>Favorite? </h2>
          <AiOutlineHeart size={30} />
        </div>
      </div>
    );
  });
  // use fragment instead of div to avoid unnecessary dom element, need key so using old syntax
  return <React.Fragment key={i++}> {quoteCards} </React.Fragment>;
};
