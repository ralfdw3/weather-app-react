import "./ForecastItem.css";
import DateFormat from "../../DateFormat";
import { useNavigate } from "react-router-dom";

const ForecastItem = ({ forecast, getAllForecasts }) => {
  const navigate = useNavigate();

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

  const handlePageDelete = (forecastId) => {
    deleteForecast(forecastId).then(() => {
      getAllForecasts();
    });
  };

  const handlePageEdit = (forecast) => {
    navigate("/cadastrar", { state: { forecast } });
  };

  return (
    <section className="list-page-info" key={forecast.id}>
      <span className="list-page-info-city">{forecast.city.name}</span>
      <div className="list-page-info-date">
        <DateFormat date={forecast.date} />
      </div>
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
    </section>
  );
};

export default ForecastItem;
