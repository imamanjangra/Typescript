import { useSelector } from "react-redux";
import type { RootState } from "../App/Shop.tsx";
import { useEffect, useState } from "react";
import { fetchWeather } from "../Hooks/ForcastHook";
import type {WeatherResponse} from "../type.tsx"
export function Wether() {
    const [weather , setWeather] =   useState<WeatherResponse | null>(null);

    const city = useSelector(
  (state: RootState) => state.weather.weather.text
  );

 useEffect(() => {
    const getWeather = async () => {
        try {
            const data = await fetchWeather(city);
            setWeather(data);
        } catch (error) {
            console.log(error);
        }
    };

    getWeather();
}, [city]);


     return (
    <div>
      <h2>{weather?.name}</h2>
      <p>{weather?.main.temp}</p>
      <p>{weather?.weather[0].description}</p>
    </div>
  );
}