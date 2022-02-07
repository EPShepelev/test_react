import React from "react";

const WeatherList = ({ cities, goToSettings }) => (
  <div>
    {cities.length &&
      cities.map((city) => {
        if (city.weather?.id) {
          return (
            <div key={city.id}>
              {city.name} - {city.weather.main.temp}
            </div>
          );
        } else {
          return null;
        }
      })}
      <button onClick={goToSettings}>Settings</button>
  </div>
);

export default WeatherList;
