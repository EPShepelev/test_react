import React, {useState, useEffect} from 'react';
import './App.css';

const Waiting = () => {
  return (
    <div className='container'>
      <p>Searching you and fetching weather, wait a few seconds...</p>
    </div>
  );
}

const Widget = ({activateEditMode}) => {
  const apiKey = '0d605237cf3a8070953669fbd55ae509'
  const [weatherData, setWeatherData ] = useState([{}])
  const [latitude, setLatitude] = useState(undefined)
  const [longitude, setLongitude] = useState(undefined)
  const [cityList, setCityList] = useState([]);

  const getCoordinates = () => {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  async function setCoordinates() {
    await getCoordinates().then(position => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }

  setCoordinates()

  useEffect(() => {
    if (latitude && longitude) {
      getDefaultWeather()
      setCityList(weatherData.name) //видимо здесь нужно использовать localStorage чтобы хранить и обновлять массив городов
    }
  }, [latitude, longitude]);

  useEffect(() => {
    cityList.forEach(city => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`).then(
        response => response.json().then(
          data => {
          // setWeatherData(data)
          console.log(data)
          }
        )
      )
    });
  }, [cityList]);

  const getDefaultWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`).then(
      response => response.json().then(
        data => {
          setWeatherData(data)
          console.log(data)
        }
      )
    )
  }



  if (!weatherData.id) {
    return <Waiting />;
  }
  return (
    <div className='container'>
      <button onClick={activateEditMode}>Settings</button>
      <p>{weatherData.name}</p>
      <p>{weatherData.main.temp} °C</p>
      <p>{weatherData.main.pressure} Pa</p>
    </div>
  );
}

const Settings = ({saveSettings}) => {
  return (
    <div className='container'>
      <p>Settings</p>
      <button onClick={saveSettings}>Save and close</button>
    </div>
  );
}

function App() {

  const [editMode, setEditMod] = useState(false);

  const activateEditMode = () => {
    setEditMod(true);
  };

  const saveSettings = () => {
    setEditMod(false);
  };

  return (
    <div className='container'>
      {editMode ? (
        <Settings
          saveSettings={saveSettings}
        />
      ) : (
        <Widget activateEditMode={activateEditMode} />
      )}
    </div>
  );
}

export default App;