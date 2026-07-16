
interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Coord {
  lon: number;
  lat: number;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherResponse {
  coord: Coord;
  weather: Weather[];
  main: Main;
  wind: Wind;
  clouds: Clouds;
  sys: Sys;
  visibility: number;
  dt: number;
  base: string;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
