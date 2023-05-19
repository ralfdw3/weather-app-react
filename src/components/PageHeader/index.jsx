import "./PageHeader.css";
import { Outlet, Link } from "react-router-dom";

const PageHeader = () => {
  return (
    <section className="page-header-container">
      <div className="page-header-info">
        <Link to="/" className="header-button">
          Home
        </Link>
        <Link to="/cadastrar" className="header-button">
          Cadastrar
        </Link>
        <Link to="/listar" className="header-button">
          Listar
        </Link>
      </div>
    </section>
  );
};
export default PageHeader;
