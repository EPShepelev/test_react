import React, { useState, useCallback } from "react";
import { DragButton } from "../DragButton/DragButton";
import dragIcon from "../../assets/img/hamburger.png";
import deleteIcon from "../../assets/img/trash.png";

export const DragList = ({ cities, setCities, deleteCity }) => {

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
    <>
    {cities.length &&
      cities.map((city, index) => {
        return (
          <div className="settings__item" key={city.id}>
            <DragButton
              key={city.id}
              index={index}
              text={city.name}
              moveListItem={moveCityListItem}
            />
            <div className="settings__drag-city">{city.name}</div>
            <button
              className="settings__drag-del"
              onClick={() => deleteCity(city.id)}
            >
              <img src={deleteIcon} alt="delete city" />
            </button>
          </div>
        );
      })
    }
   </>)

};
