import "./WeatherLayout.scss";
import { WeatherList } from  "../WeatherList/WeatherList"
import { SettingsButton } from  "../SettingsButton/SettingsButton"

export const WeatherLayout = ({ cities, goToSettings }) => (
  <div>
    <SettingsButton goToSettings={goToSettings}/>
    <WeatherList cities={cities} />
  </div>
);