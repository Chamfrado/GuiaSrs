import { Route, Routes } from "react-router-dom";
import MainNavBar from "../Components/MainNavBar";
import Cidade from "../pages/Cidade";
import RoteiroGastronomico from "../pages/CircuitoGastronomico/RoteiroGastronomico";

const AppRoutes = () => {
  return (
    <div>
      <MainNavBar />
      <Routes>
        <Route path="/" element={<Cidade />} />
        <Route path="/Gastronomia/Roteiro" element={<RoteiroGastronomico />} />
        {/* Outras rotas */}
      </Routes>
    </div>
  );
};

export default AppRoutes;
