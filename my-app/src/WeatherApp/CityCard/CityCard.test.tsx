import { render, screen } from "@testing-library/react";
import CityCard, { CityCardProps } from "./CityCard";

// Mock Function
const mockHandleAddToList = jest.fn();

// Mock Types
const cityCardProps: CityCardProps = {
  handleAddToList: mockHandleAddToList,
  city: "Derby",
  country: "United Kingdom",
  temp: 20,
  weatherIcon: "sun",
  conditionText: "Sunny",
};

// Test city card renders
test("citycard renders", () => {
  render(<CityCard {...cityCardProps} />);
  const card = screen.getByTestId("cityCard");
  expect(card).toBeInTheDocument();
});
