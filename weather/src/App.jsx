import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import "./App.scss";
import WeatherList from "./components/WeatherList/WeatherList";
import Settings from "./components/Settings/Setings";
import { usePosition } from "./helpers/usePosition";

const apiKey = "0d605237cf3a8070953669fbd55ae509";

const App = () => {
  const [editMode, setEditMode] = useState(false)
  const [inputValue, setInputValue] = useState("");
  const [cities, setCities] = useState(
    JSON.parse(localStorage.getItem("cities")) || []
  );

  const addCity = () => {
    const value = inputValue.trim();
    if (value !== "" && !cities.find((city) => city.name === value)) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric`
      ).then((response) =>
        response.json().then((weather) => {
            setCities((prev) => [
              ...prev,
              ...[{ name: value, id: v4(), weather }],
            ]);
        })
      )
      setInputValue("");
    } else {
      alert("Please, enter city");
      setInputValue("");
    }
  };

  const deleteCity = (id) => {
    setCities(cities.filter(city => city.id !== id))
  }

  const {latitude, longitude} = usePosition()

  useEffect(() => {
    if (!cities.length && latitude && longitude) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`).then(
        response => response.json().then((weather) => {
          setCities((prev) => [
            ...prev,
            ...[{ name: weather.name, id: v4(), weather }],
          ]);
        })
      )
    }
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [latitude, longitude])

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities.length]);

  const goToSettings = () => {
    setEditMode(!editMode)
  }

  return (
    <div className="App">
      <div className="container">
        {editMode ? (<Settings cities={cities} addCity={addCity} deleteCity={deleteCity} inputValue={inputValue} setInputValue={setInputValue} goToSettings={goToSettings}/>) : (<WeatherList cities={cities} goToSettings={goToSettings}/>)}
      </div>
    </div>
  );
};

export default App;