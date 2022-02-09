import "./Settings.scss";
import {DragList} from "../DragList/DragList";
import crossIcon from "../../assets/img/cross.png";
import addIcon from "../../assets/img/add.png";

const Settings = ({ cities, setCities, addCity, deleteCity, inputValue, setInputValue, goToSettings }) => (
  <div>
    <button className="settings__close-btn" onClick={goToSettings}>
      <img src={crossIcon} alt="save and exit settings"/>
    </button>
    <DragList cities={cities} setCities={setCities} deleteCity={deleteCity}/>
    <div className="settings__input-block">
      <input
        type="text"
        placeholder="Enter city..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addCity}>
        <img src={addIcon} alt="save and exit settings"/>
      </button>
    </div>
  </div>
);

export default Settings;
