import "./ListPageBody.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputWithImage from "../../InputWithImage";

const ListPageBody = () => {
  // consts
  const navigate = useNavigate();
  const [cityName, setCityName] = useState("Teutonia");
  const [allForecast, setAllForecast] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState("");

  // handlers
  const handlePageNumber = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  const handlePageDelete = (forecastId) => {
    deleteForecast(forecastId).then(() => {
      getAllForecasts();
    });
  };

  const handlePageEdit = (forecast) => {
    navigate("/cadastrar", { state: { forecast } });
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
      <div className="list-all-info">
        {allForecast.map((forecast) => (
          <div className="list-page-info" key={forecast.id}>
            <span className="list-page-info-city">{forecast.city.name}</span>
            <span className="list-page-info-date">
              {new Date(
                forecast.date.substring(0, 4),
                forecast.date.substring(5, 7) - 1,
                forecast.date.substring(8, 10)
              ).toLocaleDateString("pt-BR", { timezone: "America/Sao_Paulo" })}
            </span>
            <img
              src="src/images/listpage/edit.png"
              alt="editar"
              className="list-page-info-image-edit"
              onClick={() => handlePageEdit(forecast)}
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
              handlePageNumber(pageNumber - 1);
            }
          }}
        >
          <span className="page-changer">
            <span className="arrow">{"<"}</span>{" "}
          </span>
        </div>
        <span>
          Página {pageNumber + 1} de {totalPages}
        </span>
        <div
          onClick={() => {
            if (pageNumber + 1 < totalPages) {
              handlePageNumber(pageNumber + 1);
            }
          }}
        >
          <span className="page-changer">
            {" "}
            <span className="arrow">{">"}</span>
          </span>
        </div>
      </div>
    </section>
  );
};
export default ListPageBody;
