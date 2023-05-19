import { GoLocation } from "react-icons/go";
import "./Search.css";
import { useState } from "react";

const Search = () => {
  const [cityName, setCityName] = useState("");
  const [forecast, setForecasts] = useState([]);
  const handleSearch = () => {
    fetch(
      "http://localhost:8080/v1/forecast?cityName=" +
        `${cityName}` +
        "&size=7&sort=id",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) =>
        response.json().then((data) => {
          setForecasts(data);
          console.log(data); 
        })
      )
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="search">
      <div className="search-content">
        <span>Pesquise a cidade</span>
        <div className="second-row">
          <div className="search-city-input-and-image">
            <img
              src="src/images/magnifying-glass.png"
              alt="lupa"
              className="magnifying-glass"
              onClick={handleSearch}
            />
            <input type="text" onChange={(e) => setCityName(e.target.value)} />
          </div>

          <div className="circle">
            <div>
              <GoLocation className="location-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
