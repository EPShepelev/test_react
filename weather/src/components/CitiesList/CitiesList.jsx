import React, { useState, useCallback } from "react";
import { ListItem } from "../ListItem/ListItem";

export const CitiesList = ({ cities, setCities }) => {
  const moveCityListItem = useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = cities[dragIndex];
      const hoverItem = cities[hoverIndex];
      setCities((city) => {
        const updatedCities = [...cities];
        updatedCities[dragIndex] = hoverItem;
        updatedCities[hoverIndex] = dragItem;
        return updatedCities;
      });
    },
    [cities]
  );

  return (
    <div>
      {cities.map((city, index) => (
        <ListItem
          key={city.id}
          index={index}
          text={city.name}
          moveListItem={moveCityListItem}
        />
      ))}
    </div>
  );
};
