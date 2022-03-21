import styles from "./SettingsButton.module.scss";
import settingsIcon from "../../assets/img/settings.png";

export const SettingsButton = ({ goToSettings }) => (
  <div className={styles.button}>
    <button onClick={goToSettings}>
      <img src={settingsIcon} alt="open settings"/>
    </button>
  </div>
);