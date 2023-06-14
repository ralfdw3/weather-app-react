import { GoLocation } from "react-icons/go";
import { useContext, useState } from "react";
import { format } from "date-fns";
import { ForecastContext } from "../../../common/contexts/Forecast";
import { WeekForecastContext } from "../../../common/contexts/WeekForecast";
import { ChangeEvent } from "react";
import TodayForecastDetails from "./TodayForecastDetails";
import WeekForecastsDetails from "./WeekForecastsDetails";
import Search from "../../Search";
import "./HomePageBody.css";
import { FlexDirection } from "../../../common/enums/FlexDirection";

const HomePageBody = () => {
  // consts
  const [cityName, setCityName] = useState("");
  const { setForecastsWeek } = useContext(WeekForecastContext);
  const { setForecastToday } = useContext(ForecastContext);
  const today = new Date(Date.now());

  const handleForecastClick = () => {
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
          console.log(data);
          setForecastToday(data);
        })
      )
      .catch((error) => {
        console.log("erro: " + error);
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
        console.log("erro: " + error);
      });
  };

  return (
    <>
      <section className="home-body-container">
        <h3>Hoje</h3>
        <div className="home-search">
          <Search
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setCityName(event.target.value)
            }
            onClick={handleForecastClick}
            children={"Pesquise a cidade"}
            width={"28vw"}
            flexDirection={FlexDirection.ROW}
          />
          <div className="circle">
            <GoLocation className="location-icon" />
          </div>
        </div>
      </section>
      <TodayForecastDetails />
      <WeekForecastsDetails />
    </>
  );
};

export default HomePageBody;
