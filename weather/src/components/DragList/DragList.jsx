import { useCallback } from "react";
import { DragButton } from "../DragButton/DragButton";
import deleteIcon from "../../assets/img/trash.png";
import "./DragList.scss";

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
            <div className="draglist__item" key={city.id}>
              <DragButton
                key={city.id}
                index={index}
                text={city.name}
                moveListItem={moveCityListItem}
              />
              <div className="draglist__city">{city.name}</div>
              <button
                className="draglist__del-btn"
                onClick={() => deleteCity(city.id)}
              >
                <img src={deleteIcon} alt="delete city" />
              </button>
            </div>
          );
        })}
    </>
  );
};
