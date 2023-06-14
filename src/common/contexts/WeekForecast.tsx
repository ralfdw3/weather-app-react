import { createContext, useState } from "react";

export const WeekForecastContext = createContext<any>(null);
WeekForecastContext.displayName = "Week Forecast";

interface WeekForecastProviderProps {
  children: React.ReactNode;
}

export const WeekForecastProvider = ({
  children,
}: WeekForecastProviderProps) => {
  const [forecastsWeek, setForecastsWeek] = useState([]);

  return (
    <WeekForecastContext.Provider value={{ forecastsWeek, setForecastsWeek }}>
      {children}
    </WeekForecastContext.Provider>
  );
};
