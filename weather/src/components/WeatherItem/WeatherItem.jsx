import { tempRound } from "../../helpers/tempRound";
import styles from "./WeatherItem.module.scss";
import tempIcon from "../../assets/img/centigrade.png";
import pressureIcon from "../../assets/img/atmospheric.png";
import humidityIcon from "../../assets/img/humidity.png";

export const WeatherItem = ({ city }) => {
  let formalTemp = tempRound(city.weather.main.temp)
  let feelsLikeTemp = tempRound(city.weather.main.feels_like)

  return (
    <div className={styles.item} key={city.id}>
      <div className={styles.city}>
        <img
          className={styles.icon}
          src={`http://openweathermap.org/img/wn/${city.weather.weather[0].icon}.png`}
          alt="weather"
        />
        <p>
          {city.name}, {city.weather.sys.country}
        </p>
      </div>
      <div className={styles.data}>
        <div className={styles.text}>
          <img className={styles.digits} src={tempIcon} alt="temperature" />
          <div>
            <p> {formalTemp} &deg;C </p>
            <p>Feels like {feelsLikeTemp} &deg;C </p>
          </div>
        </div>
        <div className={styles.data}>
          <img className={styles.digits} src={pressureIcon} alt="pressure" />
          <div>{city.weather.main.pressure} hPa</div>
        </div>
        <div className={styles.data}>
          <img className={styles.digits} src={humidityIcon} alt="humidity" />
          <div>{city.weather.main.humidity} %</div>
        </div>
      </div>
    </div>
  );
};
