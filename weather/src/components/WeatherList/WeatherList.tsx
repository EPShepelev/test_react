import { FC } from "react";
import { WeatherItem } from "../WeatherItem/WeatherItem";
import { ICity } from "../../types/types";

interface WeatherListProps {
  cities: Array<ICity>
}

export const WeatherList: FC<WeatherListProps> = ({ cities }) => (
  <div>
    {cities.length &&
      cities.map((city: ICity) => {
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