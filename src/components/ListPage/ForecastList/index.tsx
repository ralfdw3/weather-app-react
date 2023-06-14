import ForecastItem from "../ForecastItem";
import { IForecast } from "../../../common/interfaces/IForecast";
import "./ForecastList.css";

interface ForecastListProps {
  allForecast: IForecast[];
  getAllForecasts: () => void;
}

const ForecastList = ({ allForecast, getAllForecasts }: ForecastListProps) => {
  return (
    <div className="list-all-info">
      {allForecast.map((forecast) => (
        <ForecastItem
          key={forecast.id}
          forecast={forecast}
          getAllForecasts={getAllForecasts}
        />
      ))}
    </div>
  );
};

export default ForecastList;
