import React from "react";
import "./Settings.scss";
import dragIcon from "../../assets/img/hamburger.png";
import deleteIcon from "../../assets/img/trash.png";
import crossIcon from "../../assets/img/cross.png";
import addIcon from "../../assets/img/add.png";

const Settings = ({ cities, addCity, deleteCity, inputValue, setInputValue, goToSettings }) => (
  <div>
    <button className="settings__close" onClick={goToSettings}>
      <img src={crossIcon} alt="save and exit settings"/>
    </button>
    {cities.length &&
      cities.map((city) => {
        return (
        <div className="settings__item" key={city.id}>
          <div className="settings_)drag-btn">
            <img className="settings__drag-img" src={dragIcon} alt="drag and drop city"/>
          </div>
          <div className="settings__drag-city">{city.name}</div>
          <button className="settings__drag-del" onClick={() => deleteCity(city.id)}>
            <img src={deleteIcon} alt="delete city"/>
          </button>
        </div>
        )
      })}
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
