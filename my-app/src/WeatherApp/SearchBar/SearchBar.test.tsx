import { screen, render, fireEvent } from "@testing-library/react";
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

// Test can enter a word into searchbar
test("can enter into searchbar input", () => {
  render(<SearchBar {...searchBarProps} />);
  const searchInput = screen.getByRole("textbox");
  expect(searchInput).toBeInTheDocument();

  fireEvent.input(searchInput, { target: { value: "derby" } });
  expect(searchInput).toHaveValue("derby");
});
