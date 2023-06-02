import InputWithTitleAbove from "../../InputWithTitleAbove";
import TitleAndOptions from "../TitleAndOptions";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./RegisterPageBody.css";

const RegisterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const forecast = location.state?.forecast;

  const [id, setId] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [shift, setShift] = useState("");
  const [weather, setWeather] = useState("");
  const [maxTemperature, setMaxTemperature] = useState("");
  const [minTemperature, setMinTemperature] = useState("");
  const [precipitation, setPrecipitation] = useState("");
  const [humidity, setHumidity] = useState("");
  const [airSpeed, setAirSpeed] = useState("");

  useEffect(() => {
    if (location.state && location.state.forecast) {
      const {
        id,
        city,
        date,
        shift,
        weather,
        maxTemperature,
        minTemperature,
        precipitation,
        humidity,
        airSpeed,
      } = location.state.forecast;

      setId(id);
      setCity(city.name);
      setDate(date);
      setShift(shift);
      setWeather(weather);
      setMaxTemperature(maxTemperature);
      setMinTemperature(minTemperature);
      setPrecipitation(precipitation);
      setHumidity(humidity);
      setAirSpeed(airSpeed);
    }
  }, []);

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

  const handleSave = () => {
    const formData = {
      id,
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
      method: forecast ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Previsão do tempo registrada");
      })
      .catch((error) => {
        alert("Erro ao gravar a previsão do tempo");
        console.error(error);
      });
  };

  const handleCancelButton = () => {
    navigate("/");
  };

  return (
    <div className="register-page-container">
      <h1>Cadastro Metereológico</h1>
      <div className="city-and-date-container">
        <div className="city-and-date-input">
          <InputWithTitleAbove
            title="Cidade"
            width="300px"
            onChange={(info) => setCity(info)}
            value={city}
          />
        </div>
        <div className="city-and-date-input">
          <div className="register-date">
            <InputWithTitleAbove
              title="Data"
              width="180px"
              type="date"
              onChange={(info) => setDate(info)}
              value={date}
            />
          </div>
        </div>
      </div>
      <div className="register-info-container">
        <div className="register-info-selectors">
          <div className="forecast-selector">
            <TitleAndOptions
              title="Tempo"
              option1={"Limpo"}
              option2={"Tempestade"}
              value={weather}
              onChange={handleWeatherChange}
            />
          </div>
          <div className="shift-selector">
            <TitleAndOptions
              title="Turno"
              option1={"Manhã"}
              option2={"Noite"}
              onChange={handleShiftChange}
              value={shift}
            />
          </div>
        </div>
        <div className="register-info-inputs">
          <div className="maxtemperature-and-precipitation">
            <div className="max-temperature-input">
              <InputWithTitleAbove
                title="Temperatura Máxima"
                width="64px"
                onChange={(info) => setMaxTemperature(info)}
                value={maxTemperature}
              />
            </div>
            <div className="precipitation-input">
              <InputWithTitleAbove
                title="Precipitação"
                width="64px"
                onChange={(info) => setPrecipitation(info)}
                value={precipitation}
              />
            </div>
          </div>
          <div className="humidity-input">
            <InputWithTitleAbove
              title="Umidade"
              width="64px"
              onChange={(info) => setHumidity(info)}
              value={humidity}
            />
          </div>
          <div className="mintemperature-and-airspeed">
            <div className="min-temperature-input">
              <InputWithTitleAbove
                title="Temperatura Mínima"
                width="64px"
                onChange={(info) => setMinTemperature(info)}
                value={minTemperature}
              />
            </div>
            <div className="air-speed-input">
              <InputWithTitleAbove
                title="Velocidade do vento"
                width="64px"
                onChange={(info) => setAirSpeed(info)}
                value={airSpeed}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="register-page-buttons">
        <div className="register-page-button">
          <button
            className="register-button-cancel"
            onClick={() => handleCancelButton()}
          >
            Cancelar
          </button>
          <button className="register-button-save" onClick={handleSave}>
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
