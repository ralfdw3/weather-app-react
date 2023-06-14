import { useState, useEffect, ChangeEvent } from "react";
import InputWithImage from "../../components/InputWithImage";
import ForecastList from "./ForecastList";
import Pagination from "./Pagination";
import { FlexDirection } from "../../common/enums/FlexDirection";
import "./ListPageBody.css";

const ListPageBody = () => {
  // consts
  const [cityName, setCityName] = useState("Lajeado");
  const [allForecast, setAllForecast] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // handlers
  const handlePageNumber = (newPageNumber: number) => {
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
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setCityName(event.target.value)
          }
          flexDirection={FlexDirection.ROW_REVERSE}
          width="28vw"
        />
      </div>
      <div className="list-page-info-header">
        <span>Cidade</span>
        <span>Data</span>
        <span>Ação</span>
      </div>
      <ForecastList
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
