import "./PageBody.css";
import { GoLocation } from "react-icons/go";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { pt } from "date-fns/locale";

const PageBody = () => {
  const [cityName, setCityName] = useState("Teutonia");
  const [forecastsWeek, setForecastsWeek] = useState([]);
  const [forecastToday, setForecastToday] = useState([]);
  const today = new Date(Date.now());

  useEffect(() => {
    forecastClickWrapper();
  }, []);

  const forecastClickWrapper = () => {
    setForecastsWeek([]);
    setForecastToday([]);

    getWeekForecasts();
    getTodayForecast();
  };

  const getTodayForecast = () => {
    fetch(
      "http://localhost:8080/v1/forecast?city=" +
        `${cityName}` +
        "&date=" +
        `${format(today, "yyyy-MM-dd")}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) =>
        response.json().then((data) => {
          setForecastToday(data);
          console.log(data.weatherStatus);
        })
      )
      .catch((error) => {
        console.log(error);
      });
  };

  const getWeekForecasts = () => {
    fetch(
      "http://localhost:8080/v1/forecast/week?cityName=" +
        `${cityName}` +
        "&page=0&size=6&sort=date",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) =>
        response.json().then((data) => {
          if (data.content.length !== 0) {
            setForecastsWeek(data.content);
          }
        })
      )
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="search">
        <div className="input-and-icons-row">
          <h3 className="today">Hoje</h3>
          <div className="search-city-input-and-image">
            <span>Pesquise a cidade</span>
            <div className="search-container">
              <img
                src="src/images/today-forecast/magnifying-glass.png"
                alt="lupa"
                className="magnifying-glass"
                onClick={forecastClickWrapper}
              />
              <input
                type="text"
                onChange={(e) => setCityName(e.target.value)}
              />
              <div className="circle">
                <GoLocation className="location-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="weather-today-container">
        <div className="weather-today-temperatures">
          <img
            src={`src/images/today-forecast/${forecastToday.weatherStatus}.png`}
            alt="imagem do tempo"
            className="cloud-image"
          />
          <div className="today-temperature">
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
        </div>
        <div className="weather-today-others-infos">
          <div className="umbrella-container">
            <img
              src="src/images/today-forecast/umbrella.png"
              alt="precipitação"
              className="umbrella-image"
            />
            <span className="percentage">
              <div>{forecastToday.precipitation}%</div>
            </span>
            <span className="climate-data">Precipitação</span>
          </div>
          <div className="drop-container">
            <img
              src="src/images/today-forecast/drop.png"
              alt="umidade do ar"
              className="drop-image"
            />
            <span className="percentage">{forecastToday.humidity}%</span>
            <span className="climate-data">Umidade</span>
          </div>
          <div className="air-container">
            <img
              src="src/images/today-forecast/air.png"
              alt="velocidade do vento"
              className="air-image"
            />
            <span className="percentage">{forecastToday.airSpeed}%</span>
            <span className="climate-data">Velocidade do vento</span>
          </div>
        </div>
      </div>

      <div className="forecast-container">
        <div className="forecast-items">
          {forecastsWeek.map((forecast) => (
            <div className="forecast-row" key={forecast.id}>
              <div className="forecast-date">
                {new Date(forecast.date).toLocaleDateString(pt)}
              </div>
              <img
                className="forecast-image"
                src={`src/images/forecast/${forecast.weatherStatus}.png`}
                alt={forecast.weatherStatus}
              />
              <div className="forecast-text">{forecast.weatherStatus}</div>
              <div className="max-temperature">{forecast.maxTemperature}°C</div>
              <div className="min-temperature">{forecast.minTemperature}°C</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PageBody;
