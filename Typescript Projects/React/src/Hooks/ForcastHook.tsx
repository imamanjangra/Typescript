import axios from "axios";
import type { AxiosResponse } from "axios";
import type {WeatherResponse} from "../type.tsx"

const apiKey = import.meta.env.VITE_API_KEY;

export const fetchWeather = async (
  city: string
): Promise<WeatherResponse> => {
  const response: AxiosResponse<WeatherResponse> = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );

  return response.data;
};