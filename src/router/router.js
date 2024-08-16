import { Route, Routes } from "react-router-dom";
import MainNavBar from "../Components/MainNavBar";
import Cidade from "../pages/Cidade";
import RoteiroGastronomico from "../pages/CircuitoGastronomico/RoteiroGastronomico";
import Cachoeira from "../pages/TurismoAventura/Cachoeira";
import Ciclismo from "../pages/TurismoAventura/Ciclismo";
import PraticasEsportivas from "../pages/TurismoAventura/PraticasEsportivas";
import EsporteRadical from "../pages/TurismoAventura/EsporteRadical";
import Trilha from "../pages/TurismoAventura/Trilha";
import Grafites from "../pages/Artes/Grafites";
import Museu from "../pages/Artes/Museu";
import Monumentos from "../pages/Artes/Monumentos";
import Hacktown from "../pages/Eventos/Hacktown";
import Fetin from "../pages/Eventos/Fetin";
import Projete from "../pages/Eventos/Projete";
import Floydianos from "../pages/Eventos/Floydianos";
import FeiraOportunidades from "../pages/Eventos/FeriaOportunidades";
import TestOffcanvas from "../pages/testcanvas";

const AppRoutes = () => {
  return (
    <div>
      <MainNavBar />
      <Routes>
        <Route path="/" element={<Cidade />} />
        <Route path="/Gastronomia/Roteiro" element={<RoteiroGastronomico />} />
        <Route path="/TurismoAventura/Cachoeira" element={<Cachoeira />} />
        <Route path="/TurismoAventura/Ciclismo" element={<Ciclismo />} />
        <Route
          path="/TurismoAventura/PraticasEsportivas"
          element={<PraticasEsportivas />}
        />
        <Route
          path="/TurismoAventura/EsporteRadical"
          element={<EsporteRadical />}
        />
        <Route path="/TurismoAventura/Trilha" element={<Trilha />} />
        <Route path="/Artes/Grafites" element={<Grafites />} />
        <Route path="/Artes/Museu" element={<Museu />} />
        <Route path="/Artes/Monumentos" element={<Monumentos />} />
        <Route path="/Eventos/Hacktown" element={<Hacktown />} />
        <Route path="/Eventos/Fetin" element={<Fetin />} />
        <Route path="/Eventos/Projete" element={<Projete />} />
        <Route path="/Eventos/Floydianos" element={<Floydianos />} />
        <Route
          path="/Eventos/FeiraOportunidades"
          element={<FeiraOportunidades />}
        />
        <Route path="/test" element={<TestOffcanvas />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
