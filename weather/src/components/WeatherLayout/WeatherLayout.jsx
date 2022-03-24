import { WeatherList } from "../WeatherList/WeatherList";
import { SettingsButton } from "../SettingsButton/SettingsButton";
import { UpdateButton } from "../UpdateButton/UpdateButton";
import styles from './WeatherLayout.module.scss';

export const WeatherLayout = ({ cities, updateWeather, goToSettings }) => (
  <div>
    <div className={styles.buttons}>
      <UpdateButton updateWeather={updateWeather} cities={cities}/>
      <SettingsButton goToSettings={goToSettings} />
    </div>
    <WeatherList cities={cities} />
  </div>
);
