import { render, screen } from "@testing-library/react";
import DisplayCards from "../mainComponents/DisplayCards";

const setup = () => {
  const utils = render(<DisplayCards />);
  const input = screen.getByLabelText("cost-input");
  return {
    input,
    ...utils,
  };
};
//recommended by maintainer to combine tests especially with shared variables
test.skip("expects search bar to load in Header.tsx", () => {
  const {} = setup();
  const searchBarElement = screen.getByTestId("search-bar");

  expect(searchBarElement).toBeInTheDocument();
  expect(searchBarElement).toHaveAttribute("placeholder", "Find a quote now");
});
