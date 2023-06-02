import "./ForecastItem.css";

const ForecastItem = ({ forecast }) => {
  console.log(forecast);
  return (
    <div className="forecast-item">
      <span className="forecast-date">
        {new Date(forecast.date).toLocaleDateString("pt-BR")}
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
