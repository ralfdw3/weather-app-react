import React, { createContext, useState } from "react";

export const WeekForecastContext = createContext();
WeekForecastContext.displayName = "Week Forecast";

export const WeekForecastProvider = ({ children }) => {
  const [forecastsWeek, setForecastsWeek] = useState([]);

  return (
    <WeekForecastContext.Provider value={{ forecastsWeek, setForecastsWeek }}>
      {children}
    </WeekForecastContext.Provider>
  );
};
