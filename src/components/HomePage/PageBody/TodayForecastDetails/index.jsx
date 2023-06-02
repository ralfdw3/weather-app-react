import { ForecastContext } from "../../../../common/contexts/Forecast";
import { useContext } from "react";
import "./TodayForecastDetails.css";
import ClimateData from "./ClimateData";

const TodayForecastDetails = () => {
  const { forecastToday } = useContext(ForecastContext);

  return (
    <section className="forecast-today-container">
      <div className="forecast-today-temperatures">
        <img
          src={`src/images/today-forecast/${forecastToday.weatherStatus}.png`}
          alt="imagem do tempo"
        />
        <span className="todays-max-temperature">
          {forecastToday.maxTemperature}
        </span>
        <span className="max-degree">°</span>
        <span className="separation-between-temperature">/</span>
        <span className="todays-min-temperature">
          {forecastToday.minTemperature}
        </span>
        <span className="min-degree">°</span>
      </div>

      <div className="forecast-climate-datas">
        <ClimateData
          imageSrc="src/images/today-forecast/umbrella.png"
          imageAlt="precipitação"
          value={forecastToday.precipitation}
          title="Precipitação"
        />

        <ClimateData
          imageSrc="src/images/today-forecast/drop.png"
          imageAlt="umidade do ar"
          value={forecastToday.humidity}
          title="Umidade"
        />

        <ClimateData
          imageSrc="src/images/today-forecast/air.png"
          imageAlt="velocidade do vento"
          value={forecastToday.airSpeed}
          title="Velocidade do vento"
        />
      </div>
    </section>
  );
};

export default TodayForecastDetails;
