import { WeekForecastContext } from "../../../../common/contexts/WeekForecast";
import { useContext } from "react";
import "./WeekForecastsDetails.css";
import ForecastItem from "./ForecastItem";

const WeekForecastsDetails = () => {
  const { forecastsWeek } = useContext(WeekForecastContext);

  return (
    <section className="week-forecast">
      {forecastsWeek.map((forecast) => (
        <ForecastItem forecast={forecast} key={forecast.id} />
      ))}
    </section>
  );
};

export default WeekForecastsDetails;
