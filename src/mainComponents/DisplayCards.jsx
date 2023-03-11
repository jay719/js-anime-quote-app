import React, { useCallback, useEffect, useState } from "react";
import { searchForNewQuoteApiCall } from "../helperFunctions/apiCalls";

export default function DisplayCards() {
  // const [cards, setCards] = useState(given);

  // useEffect(() => {
  //   setCards(givenCards);
  // }, [setCards, cards]);

  return (
    <div className="main-screen">
      <div className={"cards"} data-testid={"cards-section"}>
        {}
      </div>
    </div>
  );
}
