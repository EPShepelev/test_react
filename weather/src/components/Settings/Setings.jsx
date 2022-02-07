import React from "react";

const Settings = ({ cities, addCity, inputValue, setInputValue, goToSettings }) => (
  <div>
    {cities.length &&
      cities.map((city) => {
        return (
        <div key={city.id}>
          <div>drag</div>
          <div>{city.name}</div>
          <button>delete</button>
        </div>
        )
      })}
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
    <button onClick={goToSettings}>Save</button>
  </div>
);

export default Settings;
