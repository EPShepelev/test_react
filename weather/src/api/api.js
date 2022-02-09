const option = {
  baseURL: "https://api.openweathermap.org/data/2.5/",
  apiKey: "0d605237cf3a8070953669fbd55ae509",
  units: "metric"
}

export const getWeatherForDefaultCitiy = async (latitude, longitude) => {
  const response = await fetch(`${option.baseURL}weather?lat=${latitude}&lon=${longitude}&appid=${option.apiKey}&units=${option.units}`);
  return await response.json();
};

export const getCitiesWeather = async (cityName) => {
  const response = await fetch(`${option.baseURL}weather?q=${cityName}&appid=${option.apiKey}&units=${option.units}`)
  return await response.json();
}
