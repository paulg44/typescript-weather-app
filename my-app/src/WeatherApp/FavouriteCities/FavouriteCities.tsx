// Component for favourite cities list
import { CityData } from "../WeatherAppDisplay";
import "./FavouriteCities.css";

type FavouriteCitiesProps = {
  addFavourite: CityData[];
};

function FavouriteCities({ addFavourite }: FavouriteCitiesProps) {
  return (
    <div className="favouriteCities">
      <ul>
        {addFavourite.map((city: CityData) => (
          <li key={city.name}>{city.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FavouriteCities;
