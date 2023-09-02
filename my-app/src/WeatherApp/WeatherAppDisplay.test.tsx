import { render, screen } from "@testing-library/react";
import WeatherAppDisplay from "./WeatherAppDisplay";

test("page renders", () => {
  render(<WeatherAppDisplay />);
  const page = screen.getByTestId("page");
  expect(page).toBeInTheDocument();
});

// Test back to home button
test("back to home button", () => {
  render(<WeatherAppDisplay />);
  const returnBtn = screen.getByRole("button", { name: "Return to Home" });
  expect(returnBtn).toBeInTheDocument();
});
