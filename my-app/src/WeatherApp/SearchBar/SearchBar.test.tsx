import { screen, render } from "@testing-library/react";
import SearchBar, { SearchBarProps } from "./SearchBar";

// Mock Functions
const mockHandleInputChange = jest.fn();
const mockHandleSearchClick = jest.fn();

// Mock Props(Types)
const searchBarProps: SearchBarProps = {
  handleInputChange: mockHandleInputChange,
  handleSearchClick: mockHandleSearchClick,
};

// Test searchbar button renders
test("searchbar button renders", () => {
  render(<SearchBar {...searchBarProps} />);
  const searchBar = screen.getByRole("button", { name: "Search" });
  expect(searchBar).toBeInTheDocument();
});
