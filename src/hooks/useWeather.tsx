import { Weather } from "@/types/weather";
import { useState } from "react";

const useTemperature = (teamperature: number) => {
  const [unit, setUnit] = useState<"C" | "F">("C");

  // Toggle Unit
  const toggleUnit = () => {
    setUnit((prev) => (prev === "C" ? "F" : "C"));
  };

  // Convert the temperature from Celsius to Fahrenheit if needed
  const temperature = unit === "C" ? teamperature : teamperature * 1.8 + 32;

  return { unit, temperature: temperature.toFixed(1), toggleUnit };
};

export default useTemperature;
