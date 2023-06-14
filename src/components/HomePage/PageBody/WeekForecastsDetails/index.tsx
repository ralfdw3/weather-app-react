import { WeekForecastContext } from "../../../../common/contexts/WeekForecast";
import { useContext } from "react";
import { IForecast } from "../../../../common/interfaces/IForecast";
import ForecastItem from "./ForecastItem";
import "./WeekForecastsDetails.css";

const WeekForecastsDetails = () => {
  const { forecastsWeek } = useContext(WeekForecastContext);

  return (
    <section className="week-forecast">
      {forecastsWeek.map((forecast: IForecast) => (
        <ForecastItem forecast={forecast} key={forecast.id} />
      ))}
    </section>
  );
};

export default WeekForecastsDetails;
