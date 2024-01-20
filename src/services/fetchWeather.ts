import { Weather } from "@/types/weather";
import axios, { AxiosError } from "axios";

const fetchWeather = async (location: string) => {
  const params = {
    q: location,
    appid: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
    units: "metric",
  };

  try {
    const { data } = await axios.get<Weather>(
      `https://api.openweathermap.org/data/2.5/weather`,
      { params }
    );
    return {
      weather: data,
      error: null,
    };
  } catch (err) {
    const error = err as AxiosError<ErrorResponse>;
    const message = error.response?.data.message || error.message;
    return {
      weather: null,
      error: message
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" "),
    };
  }
};

export default fetchWeather;

type ErrorResponse = {
  cod: number;
  message: string;
};
