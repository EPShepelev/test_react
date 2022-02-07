import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import "./App.css";
import WeatherList from "../../test_react/weather/src/forWikeend/WeatherList/WeatherList";

const apiKey = "0d605237cf3a8070953669fbd55ae509";

const App = () => {
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
      );

      setInputValue("");
    } else {
      alert("Please, enter city");
      setInputValue("");
    }
  };

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities.length]);

  return (
    <div className="App">
      <div className="container">
        <input
          className="input"
          type="text"
          placeholder="Enter city..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn" onClick={addCity}>
          Add
        </button>
        <WeatherList cities={cities} />
      </div>
    </div>
  );
};

export default App;
