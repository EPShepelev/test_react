import React from "react";
import "./Settings.scss";
import {DragList} from "../DragList/DragList";
import crossIcon from "../../assets/img/cross.png";
import addIcon from "../../assets/img/add.png";

const Settings = ({ cities, setCities, addCity, deleteCity, inputValue, setInputValue, goToSettings }) => (
  <div>
    <button className="settings__close" onClick={goToSettings}>
      <img src={crossIcon} alt="save and exit settings"/>
    </button>
      <DragList cities={cities} setCities={setCities} deleteCity={deleteCity}/>
      <div className="settings__input-block">
    <input
      className="settings__input-field"
      type="text"
      placeholder="Enter city..."
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
    <button className="settings__input-btn" onClick={addCity}>
      <img src={addIcon} alt="save and exit settings"/>
    </button>
    </div>
  </div>
);

export default Settings;
