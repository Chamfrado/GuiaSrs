import { Route, Routes } from "react-router-dom"
import MainNavBar from "../Components/MainNavBar"
import Home from "../pages/Cidade"

const AppRoutes = () => {

    return(
        <div>
        <MainNavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Outras rotas */}
        </Routes>
        </div>
    )
    
}

export default AppRoutes