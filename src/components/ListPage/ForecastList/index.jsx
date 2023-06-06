import ForecastItem from "../ForecastItem";
import "./ForecastList.css";

const ForecastList = ({ allForecast, getAllForecasts }) => {
  return (
    <div className="list-all-info">
      {allForecast.map((forecast) => (
        <ForecastItem forecast={forecast} getAllForecasts={getAllForecasts} />
      ))}
    </div>
  );
};

export default ForecastList;
