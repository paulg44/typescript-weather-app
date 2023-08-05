// Component for favourite cities list
import { CityData } from "../App";

type FavouriteCitiesProps = {
  addFavourite: CityData[];
};

function FavouriteCities({ addFavourite }: FavouriteCitiesProps) {
  return (
    <div>
      <ul>
        {addFavourite.map((city: CityData) => (
          <li key={city.name}>{city.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FavouriteCities;
