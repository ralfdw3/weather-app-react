import "./PageBody.css";
import { GoLocation } from "react-icons/go";
import { useContext, useState } from "react";
import { format } from "date-fns";
import { ForecastContext } from "../../../common/contexts/Forecast";
import { WeekForecastContext } from "../../../common/contexts/WeekForecast";
import TodayForecastDetails from "./TodayForecastDetails";
import WeekForecastsDetails from "./WeekForecastsDetails";
import InputWithImage from "../../InputWithImage";

const PageBody = () => {
  const [cityName, setCityName] = useState("");
  const { setForecastsWeek } = useContext(WeekForecastContext);
  const { setForecastToday } = useContext(ForecastContext);
  const today = new Date(Date.now());

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
      <div className="header-container">
        <h3>Hoje</h3>
        <div className="search-city-input-and-image">
          <span>Pesquise a cidade</span>
          <div className="search-container">
            <InputWithImage
              onChange={(e) => setCityName(e.target.value)}
              onClick={forecastClickWrapper}
            />
            <div className="circle">
              <GoLocation className="location-icon" />
            </div>
          </div>
        </div>
      </div>
      <TodayForecastDetails />
      <WeekForecastsDetails />
    </>
  );
};

export default PageBody;
