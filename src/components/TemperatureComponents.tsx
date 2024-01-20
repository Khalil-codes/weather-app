import { Weather } from "@/types/weather";
import React from "react";

type Props = {
  main: Weather["main"];
  wind: Weather["wind"];
};

const TemperatureComponents = ({ main, wind }: Props) => {
  return (
    <>
      <Pressure pressure={main.pressure} />
      <Humidity humidity={main.humidity} />
      <WindSpeed speed={wind.speed} />
      <WindDirection deg={wind.deg} />
    </>
  );
};

export default TemperatureComponents;

const Pressure = ({ pressure }: { pressure: number }) => {
  return (
    <figure className="flex items-center space-x-2" title="Pressure">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-label="Pressure icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 9l4-4 4 4m0 6l-4 4-4-4"
        />
      </svg>
      <figcaption>
        <span className="text-gray-800 font-medium">{pressure} hPa</span>
      </figcaption>
    </figure>
  );
};

const Humidity = ({ humidity }: { humidity: number }) => {
  return (
    <figure className="flex items-center space-x-2" title="Humidity">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-label="Humidity icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
      <figcaption>
        <span className="text-gray-800 font-medium">{humidity}%</span>
      </figcaption>
    </figure>
  );
};

const WindSpeed = ({ speed }: { speed: number }) => {
  return (
    <figure className="flex items-center space-x-2" title="Wind Speed">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-label="Wind Speed icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
      <figcaption>
        <span className="text-gray-800 font-medium">{speed} m/s</span>
      </figcaption>
    </figure>
  );
};

const WindDirection = ({ deg }: { deg: number }) => {
  return (
    <figure className="flex items-center space-x-2" title="Wind Direction">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-label="Wind Direction icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l6-3.5-6-3.5M6 10.5l6 3.5"
        />
      </svg>
      <figcaption>
        <span className="text-gray-800 font-medium">{deg}°</span>
      </figcaption>
    </figure>
  );
};
