import React, { useState, useEffect } from "react";
import { v4 } from "uuid";

const WeatherList = ({ cities }) => (
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
  </div>
);

export default WeatherList;
