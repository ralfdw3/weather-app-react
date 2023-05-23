import InputWithTitleAbove from "../../InputWithTitleAbove";
import TitleAndOptions from "../TitleAndOptions";
import "./RegisterPageBody.css";
import React, { useState } from "react";

const RegisterPage = () => {
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [shift, setShift] = useState("");
  const [weather, setWeather] = useState("");
  const [maxTemperature, setMaxTemperature] = useState("");
  const [minTemperature, setMinTemperature] = useState("");
  const [precipitation, setPrecipitation] = useState("");
  const [humidity, setHumidity] = useState("");
  const [airSpeed, setAirSpeed] = useState("");

  const handleCityChange = (info) => {
    setCity(info);
  };

  const handleDateChange = (info) => {
    setDate(info);
  };

  const handleShiftChange = (selectedOption) => {
    if (selectedOption === "Manhã") {
      setShift("DAY");
    } else {
      setShift("NIGHT");
    }
  };

  const handleWeatherChange = (selectedOption) => {
    if (selectedOption === "Limpo") {
      setWeather("CLEAR");
    } else {
      setWeather("STORM");
    }
  };

  const handleMaxTemperatureChange = (info) => {
    setMaxTemperature(info);
  };

  const handleMinTemperatureChange = (info) => {
    setMinTemperature(info);
  };

  const handlePrecipitationChange = (info) => {
    setPrecipitation(info);
  };

  const handleHumidityChange = (info) => {
    setHumidity(info);
  };

  const handleAirSpeedChange = (info) => {
    setAirSpeed(info);
  };

  const handleSave = () => {
    const formData = {
      city,
      date,
      shift,
      weather,
      maxTemperature,
      minTemperature,
      precipitation,
      humidity,
      airSpeed,
    };

    fetch("http://localhost:8080/v1/forecast", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="register-page-container">
      <h1>Cadastro Metereológico</h1>
      <div className="city-and-date">
        <InputWithTitleAbove
          title="Cidade"
          width="300px"
          onChange={handleCityChange}
        />
        <div className="register-date">
          <InputWithTitleAbove
            title="Data"
            width="180px"
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="register-info-container">
        <div className="forecast-selector">
          <TitleAndOptions
            title="Tempo"
            option1={"Limpo"}
            option2={"Tempestade"}
            onChange={handleWeatherChange}
          />
        </div>
        <div className="shift-selector">
          <TitleAndOptions
            title="Turno"
            option1={"Manhã"}
            option2={"Noite"}
            onChange={handleShiftChange}
          />
        </div>
        <div className="maxtemperature-and-precipitation">
          <div className="max-temperature-input">
            <InputWithTitleAbove
              title="Temperatura Máxima"
              width="64px"
              onChange={handleMaxTemperatureChange}
            />
          </div>
          <div className="precipitation-input">
            <InputWithTitleAbove
              title="Precipitação"
              width="64px"
              onChange={handlePrecipitationChange}
            />
          </div>
        </div>
        <div className="humidity-input">
          <InputWithTitleAbove
            title="Umidade"
            width="64px"
            onChange={handleHumidityChange}
          />
        </div>
        <div className="mintemperature-and-airspeed">
          <div className="min-temperature-input">
            <InputWithTitleAbove
              title="Temperatura Mínima"
              width="64px"
              onChange={handleMinTemperatureChange}
            />
          </div>
          <div className="air-speed-input">
            <InputWithTitleAbove
              title="Velocidade do vento"
              width="64px"
              onChange={handleAirSpeedChange}
            />
          </div>
        </div>
      </div>

      <div className="register-page-buttons">
        <div className="register-page-button">
          <button onClick={() => console.log("cancelar")}>Cancelar</button>
          <button onClick={handleSave}>Salvar</button>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
