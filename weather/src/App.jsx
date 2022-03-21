import { useState, useEffect } from "react";
import { v4 } from "uuid";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { usePosition } from "./helpers/usePosition";
import { WeatherLayout } from "./components/WeatherLayout/WeatherLayout";
import { Settings } from "./components/Settings/Settings";
import { getWeatherForDefaultCitiy, getCitiesWeather } from "./api/api";
import "./App.scss";

const App = () => {
  const [count, setCount] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [cities, setCities] = useState(
    JSON.parse(localStorage.getItem("cities")) || []
  );
  const { latitude, longitude } = usePosition();

  useEffect(() => {
    if (!cities.length && latitude && longitude) {
      getWeatherForDefaultCitiy(latitude, longitude).then((weather) => {
        setCities((prev) => [
          ...prev,
          ...[{ name: weather.name, id: v4(), weather }],
        ]);
      });
    }
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [latitude, longitude]);

  const addCity = () => {
    const value = inputValue.trim();
    if (value !== "" && !cities.find((city) => city.name === value)) {
      getCitiesWeather(value).then((weather) => {
        if (weather.cod === "404") {
          alert("Please, enter correct city name");
        }
        else {
          setCities((prev) => [
            ...prev,
            ...[{ name: value, id: v4(), weather }],
          ]);
        }
      });
      setInputValue("");
    } else {
      alert("Please, enter correct city");
      setInputValue("");
    }
  };

  const deleteCity = (id) => {
    setCities(cities.filter((city) => city.id !== id));
  };

  // так как в тз нет требования к обновлнию погоды сделал на свое усмотрение, обновление с интервалом 5 минут, можно сделать обновление по нажатию кнопки
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (cities.length) {
  //       cities.forEach((city) => {
  //         getCitiesWeather(city.name).then((weather) => {
  //           city.weather = weather;
  //         });
  //       });
  //     }
  //     setCount((count) => count + 1);
  //   }, 300000);
  //   return () => clearInterval(interval);
  // }, [count]);

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities.length, cities.weather]);

  const goToSettings = () => {
    setEditMode((prev) => !prev);
  };

  const updateWeather = () => {
    if (cities.length) {
      cities.forEach((city) => {
        getCitiesWeather(city.name).then((weather) => {
          city.weather = weather;
        });
      });
    }
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <div className="container">
          {editMode ? (
            <Settings
              cities={cities}
              inputValue={inputValue}
              setInputValue={setInputValue}
              setCities={setCities}
              addCity={addCity}
              deleteCity={deleteCity}
              goToSettings={goToSettings}
            />
          ) : (
            <WeatherLayout cities={cities} updateWeather={updateWeather} goToSettings={goToSettings} />
          )}
        </div>
      </div>
    </DndProvider>
  );
};

export default App;