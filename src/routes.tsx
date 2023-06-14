import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Register from "./pages/Register";
import List from "./pages/List";
import { ForecastProvider } from "./common/contexts/Forecast";
import { WeekForecastProvider } from "./common/contexts/WeekForecast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.css";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ForecastProvider>
        <WeekForecastProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastrar" element={<Register />} />
            <Route path="/listar" element={<List />} />
          </Routes>
        </WeekForecastProvider>
      </ForecastProvider>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<AppRoutes />);
