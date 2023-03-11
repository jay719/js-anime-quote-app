import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { turnQuotesIntoCards } from "../helperFunctions/turnQuotesIntoCards";
// import Header from "../helperFunctions/renderComponents/Header";
// import { shallow, wrapper } from "enzyme";
// const quotes = [
//   { author: "Goat Man", body: "I am the goat" },
//   { author: "Goat Man", body: "I am the goat" },
//   { author: "Goat Man", body: "I am the goat" },
//   { author: "Goat Man", body: "I am the goat" },
// ];

test.skip("expects search bar to load in Header.tsx", () => {
  const titleName = "titleName";
  const utils = render(turnQuotesIntoCards(titleName));
  const titleElement = screen.getAllByTestId("title");
  //   const secondWrapper = screen.get(titleElement);
  //   secondWrapper.text(); // "titleName"
  //   const containsTitle = secondWrapper.contains(titleName);
  //   expect(containsTitle).toBe(true);
});
