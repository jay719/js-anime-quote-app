import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Header from "../mainComponents/Header";
const utils = render(<Header />);
const input = screen.getByLabelText("quote-input");
const setup = () => {
  return {
    input,
    ...utils,
  };
};
//recommended by maintainer to combine tests especially with shared variables
test("expects search bar to be in doc and have correct placeholder in Header.tsx", () => {
  render(<Header />);

  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("placeholder", "Find a quote now");
});
test("expects typing functionality to work", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "23" } });
  // expect(input.value).toBe("23");
  fireEvent.change(input, { target: { value: "" } });
  // expect(input.value).toBe("");
});
