import React, { createContext, useState } from "react";

export const ForecastContext = createContext();
ForecastContext.displayName = "Forecast";

export const ForecastProvider = ({ children }) => {
  const [forecastToday, setForecastToday] = useState({
    maxTemperature: 0,
    minTemperature: 0,
    weatherStatus: "Sol com nuvens",
    precipitation: 0,
    humidity: 0,
    airSpeed: 0,
    weatherStatus: "Sol",
  });

  return (
    <ForecastContext.Provider value={{ forecastToday, setForecastToday }}>
      {children}
    </ForecastContext.Provider>
  );
};
