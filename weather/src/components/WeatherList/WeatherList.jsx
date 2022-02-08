import React from "react";
import "./WeatherList.scss";
import settingsIcon from "../../assets/img/settings.png";
import tempIcon from "../../assets/img/centigrade.png";
import pressureIcon from "../../assets/img/atmospheric.png";
import humidityIcon from "../../assets/img/humidity.png";

const WeatherList = ({ cities, goToSettings }) => (
  <div className="weather">
    <button className="weather__settings-btn" onClick={goToSettings}>
      <img className="weather__settings-img" src={settingsIcon} alt="open settings"/>
    </button>
    <div className="weather__list">
      {cities.length &&
        cities.map((city) => {
          if (city.weather?.id) {
            return (
              <div className="weather__item" key={city.id}>
                <div className="weather__city"><img className="weather__icon" src={`http://openweathermap.org/img/wn/${city.weather.weather[0].icon}.png`} alt="weather"/><p>{city.name}, {city.weather.sys.country}</p></div>
                <div className="weather__data">
                  <div className="weather__data-item">
                    <img className="weather__data-temp" src={tempIcon} alt="temperature"/>
                      <div>
                        <p> {city.weather.main.temp} &deg;C </p>
                        <p>Feels like {city.weather.main.feels_like} &deg;C </p>
                      </div>
                  </div>
                  <div className="weather__data-item">
                    <img className="weather__data-temp" src={pressureIcon} alt="pressure"/>
                    <div>{city.weather.main.pressure} hPa</div>
                  </div>
                  <div className="weather__data-item">
                    <img className="weather__data-temp" src={humidityIcon} alt="humidity"/>
                    <div>{city.weather.main.humidity} %</div>
                  </div>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
    </div>
  </div>
);

export default WeatherList;
