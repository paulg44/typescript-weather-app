// Component for favourite cities list
import { CityData } from "../WeatherAppDisplay";
import { Container, ListGroup } from "react-bootstrap";

export type FavouriteCitiesProps = {
  addFavourite: CityData[];
};

function FavouriteCities({ addFavourite }: FavouriteCitiesProps) {
  return (
    <Container
      data-testid="cityList"
      className="d-flex flex-column justify-content-center"
    >
      <h3>Saved Cities</h3>
      <ListGroup numbered>
        {addFavourite.map((city: CityData) => (
          <ListGroup.Item action variant="info" key={city.name}>
            {city.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default FavouriteCities;
