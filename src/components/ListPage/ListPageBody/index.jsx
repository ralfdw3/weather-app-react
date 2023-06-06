import "./ListPageBody.css";
import { useState, useEffect } from "react";
import InputWithImage from "../../InputWithImage";
import ForecastList from "../ForecastList";
import Pagination from "../Pagination";

const ListPageBody = () => {
  // consts
  const [cityName, setCityName] = useState("Teutonia");
  const [allForecast, setAllForecast] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState("");

  // handlers
  const handlePageNumber = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  const getAllForecasts = () => {
    fetch(
      "http://localhost:8080/v1/forecast/all?cityName=" +
        `${cityName}` +
        "&page=" +
        `${pageNumber}` +
        "&size=10&sort=date,desc",
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
            setAllForecast(data.content);
            setTotalPages(data.totalPages);
          } else {
            alert("Nenhuma previsão cadastrada nesta cidade.");
          }
          console.log(data);
        })
      )
      .catch((error) => {
        alert(
          "Erro ao buscar as previsões desta cidade. Verifique o nome digitado."
        );
        console.log(error);
      });
  };

  useEffect(() => {
    getAllForecasts();
  }, [pageNumber]);

  return (
    <section className="list-page-container">
      <h1>Cadastro Metereológico</h1>
      <div className="list-page-search-city">
        <span>Cidade</span>
        <InputWithImage
          onClick={getAllForecasts}
          onChange={(e) => setCityName(e.target.value)}
          flexDirection="row-reverse"
          width="28vw"
        />
      </div>
      <div className="list-page-info-header">
        <span>Cidade</span>
        <span>Data</span>
        <span>Ação</span>
      </div>
      <ForecastList
        cityName={cityName}
        allForecast={allForecast}
        getAllForecasts={getAllForecasts}
      />
      <Pagination
        pageNumber={pageNumber}
        totalPages={totalPages}
        handlePageNumber={handlePageNumber}
      />
    </section>
  );
};
export default ListPageBody;
