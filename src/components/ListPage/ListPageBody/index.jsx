import "./ListPageBody.css";
import { useState, useEffect } from "react";

const ListPageBody = () => {
  const [cityName, setCityName] = useState("Teutonia");
  const [allForecast, setAllForecast] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState("");

  useEffect(() => {
    getAllForecasts();
  }, [pageNumber]);

  const handlePageChange = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  const handlePageDelete = (forecastId) => {
    deleteForecast(forecastId).then(() => {
      getAllForecasts();
    });
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

  const deleteForecast = (id) => {
    return fetch("http://localhost:8080/v1/forecast?id=" + `${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("http://localhost:8080/v1/forecast?id=" + `${id}`);
        if (response.ok) {
          console.log("Recurso deletado com sucesso.");
          console.log(response);
        }
      })
      .catch((error) => {
        console.log("Ocorreu um erro durante a exclusão:", error);
      });
  };

  return (
    <div className="list-page-container">
      <h1>Cadastro Metereológico</h1>
      <div className="list-page-search-city">
        <span>Cidade</span>
        <div className="list-page-input-and-magnifying-glass">
          <input type="text" onChange={(e) => setCityName(e.target.value)} />
          <img
            src="src/images/magnifying-glass.png"
            alt="lupa"
            className="list-magnifying-glass"
            onClick={getAllForecasts}
          />
        </div>
      </div>
      <div className="list-page-info-header">
        <span>Cidade</span>
        <span>Data</span>
        <span>Ação</span>
      </div>
      <div className="list-all-info">
        {allForecast.map((forecast) => (
          <div className="list-page-info" key={forecast.id}>
            <span className="list-page-info-city">{forecast.city.name}</span>
            <span className="list-page-info-date">
              {new Date(forecast.date).toLocaleDateString("pt-BR")}
            </span>
            <img
              src="src/images/listpage/edit.png"
              alt="editar"
              className="list-page-info-image-edit"
            />
            <img
              src="src/images/listpage/exclude.png"
              alt="excluir"
              className="list-page-info-image-exclude"
              onClick={() => handlePageDelete(forecast.id)}
            />
          </div>
        ))}
      </div>
      <div className="list-pagination">
        <div
          onClick={() => {
            if (pageNumber > 0) {
              handlePageChange(pageNumber - 1);
            }
          }}
        >
          {"< "}
        </div>
        <span>
          Página {pageNumber + 1} de {totalPages}
        </span>
        <div
          onClick={() => {
            if (pageNumber + 1 < totalPages) {
              handlePageChange(pageNumber + 1);
            }
          }}
        >
          {" >"}
        </div>
      </div>
    </div>
  );
};
export default ListPageBody;
