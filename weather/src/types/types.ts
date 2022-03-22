export interface ICity {
  name: string
  id: string
  weather?: IWeather
}

export interface IWeather {
  "coord": ICoords
  "weather": Array<IWeatherDate>
  "base": string
  "main": IMain
  "visibility": number,
  "wind": IWind
  "clouds": {
    "all": 1
  },
  "dt": number,
  "sys": ISys
  "timezone": number
  "id": number
  "name": string
  "cod": number
}

interface ICoords {
  lon: number
  lat: number
}
interface IWeatherDate {
  "id": number
  "main": string
  "description": string
  "icon": string
}
interface IMain {
  "temp": number
  "feels_like": number
  "temp_min": number
  "temp_max": number
  "pressure": number
  "humidity": number
}
interface IWind {
  "speed": number
  "deg": number
}

interface ISys {
  "type": number
  "id": number
  "message": number
  "country": string
  "sunrise": number
  "sunset": number
}