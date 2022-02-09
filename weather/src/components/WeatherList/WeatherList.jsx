import { WeatherItem } from "../WeatherItem/WeatherItem";

export const WeatherList = ({ cities }) => (
  <div>
    {cities.length &&
      cities.map((city) => {
        if (city.weather?.id) {
          return (
            <WeatherItem key={city.id} city={city} />
          );
        } else {
          return null;
        }
      })}
  </div>
);