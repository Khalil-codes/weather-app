import useTemperature from "@/hooks/useWeather";
import { Weather } from "@/types/weather";
import Image from "next/image";
import React from "react";

type Props = {
  weather: Weather["weather"][number];
  temperature: number;
};

const TemperatureDisplay = ({
  temperature: temperatureProp,
  weather,
}: Props) => {
  const { temperature, unit, toggleUnit } = useTemperature(temperatureProp);
  return (
    <div className="mt-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Image
          src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt={weather.description}
          className="w-15 h-15"
          width={80}
          height={80}
        />
        <span className="text-xl font-medium text-gray-800">
          {weather.main}
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-4xl font-bold text-gray-800">{temperature}°</span>
        <button
          onClick={toggleUnit}
          className="px-2 py-1 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-200"
        >
          {unit}
        </button>
      </div>
    </div>
  );
};

export default TemperatureDisplay;
