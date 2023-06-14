import "./ForecastItem.css";
import DateFormat from "../../../../DateFormat";
import { IForecast } from "../../../../../common/interfaces/IForecast";

const ForecastItem = (props: { forecast: IForecast }) => {
  console.log(props.forecast.date);
  return (
    <div className="forecast-item">
      <span className="forecast-date">
        <DateFormat date={props.forecast.date} />
      </span>
      <img
        className="forecast-image"
        src={`src/images/forecast/${props.forecast.weatherStatus}.png`}
        alt={props.forecast.weatherStatus}
      />
      <span className="forecast-text">{props.forecast.weatherStatus}</span>
      <span className="max-temperature">{props.forecast.maxTemperature}°C</span>
      <span className="min-temperature">{props.forecast.minTemperature}°C</span>
    </div>
  );
};

export default ForecastItem;
