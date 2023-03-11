import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";

test("expects necessary elements are on page search bar to load in App.tsx", () => {
  render(<App />);
  const cardsSection = screen.getByTestId("cards-section");
  const searchBarElement = screen.getByTestId("search-bar");
  expect(searchBarElement).toBeInTheDocument();

  expect(cardsSection).toBeInTheDocument();
});
