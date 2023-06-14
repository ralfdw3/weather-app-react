import React, { createContext, useState } from "react";

export const ForecastContext = createContext<any>(null);
ForecastContext.displayName = "Forecast";

export const ForecastProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [forecastToday, setForecastToday] = useState({
    maxTemperature: 0,
    minTemperature: 0,
    weatherStatus: "Sol com nuvens",
    precipitation: 0,
    humidity: 0,
    airSpeed: 0,
  });

  return (
    <ForecastContext.Provider value={{ forecastToday, setForecastToday }}>
      {children}
    </ForecastContext.Provider>
  );
};
