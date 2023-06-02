import "./ForecastItem.css";
import DateFormat from "../../../../DateFormat";

const ForecastItem = ({ forecast }) => {
  console.log(forecast.date);
  return (
    <div className="forecast-item">
      <span className="forecast-date">
        <DateFormat date={forecast.date} />
      </span>
      <img
        className="forecast-image"
        src={`src/images/forecast/${forecast.weatherStatus}.png`}
        alt={forecast.weatherStatus}
      />
      <span className="forecast-text">{forecast.weatherStatus}</span>
      <span className="max-temperature">{forecast.maxTemperature}°C</span>
      <span className="min-temperature">{forecast.minTemperature}°C</span>
    </div>
  );
};
export default ForecastItem;
