import { Route, Routes } from "react-router-dom"
import MainNavBar from "../Components/MainNavBar"
import Cidade from "../pages/Cidade"

const AppRoutes = () => {

    return(
        <div>
        <MainNavBar/>
        <Routes>
          <Route path="/" element={<Cidade />} />
          {/* Outras rotas */}
        </Routes>
        </div>
    )
    
}

export default AppRoutes