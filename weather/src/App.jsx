import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const apiKey = '0d605237cf3a8070953669fbd55ae509'
  const [weatherData, setWeatherData ] = useState({})
  const [city, setCity] = useState("")
  const [latitude, setLatitude] = useState(33.8114)
  const [longitude, setLongitude] = useState(-117.9211)

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

  useEffect(() => {
    getDefaultWeather()
  }, [weatherData.id]);

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=${apiKey}&units=metric`).then(
        response => response.json().then(
          data => {
            setWeatherData(data)
            console.log(data)
          }
        )
      )
    }
  }



  const getPosition = () => {
    console.log("success") //сюда получение и установка координат
  }

  const positionError= (e) => {
    console.log("The application has an error while trying to determine your location. Details: " + e.message);
  }

  const findMe = () => {
      navigator.geolocation.getCurrentPosition(getPosition, positionError);
  }

  return (
    <div className='container'>
      <input 
      className='input' 
      placeholder='Enter city...'
      onChange = {e => setCity(e.target.value)}
      value={city}
      onKeyPress={getWeather}
      />
      <button
      onClick={findMe}
      >Settings
      </button>
      <p>{weatherData.name || "nothing"}</p>
    </div>
  );
}

export default App;