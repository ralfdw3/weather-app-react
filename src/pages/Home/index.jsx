import "./Home.css";
import PageHeader from "../../components/PageHeader";
import PageBody from "../../components/HomePage/PageBody";
import Search from "../../components/HomePage/Search";
import Forecast from "../../components/HomePage/Forecast";
import PageFooter from "../../components/PageFooter";

const Home = () => {
  return (
    <div className="home-container">
      <div className="header-home-page">
        <PageHeader />
      </div>

      <div className="body-home-page">
        <Search />
        <PageBody />
        <Forecast />
      </div>

      <div className="footer-home-page">
        <PageFooter />
      </div>
    </div>
  );
};

export default Home;
