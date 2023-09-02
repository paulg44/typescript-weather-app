import FavouriteCities, { FavouriteCitiesProps } from "./FavouriteCities";
import { screen, render } from "@testing-library/react";

// Mocks
const favouriteCitiesProps: FavouriteCitiesProps = {
  addFavourite: [],
};

test("saved cities list renders", () => {
  render(<FavouriteCities {...favouriteCitiesProps} />);
  const cityList = screen.getByTestId("cityList");
  expect(cityList).toBeInTheDocument();
});
