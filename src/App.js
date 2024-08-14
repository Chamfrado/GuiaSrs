import "./App.css";
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home'; // Certifique-se de que a capitalização corresponda
import { Nav, Navbar, NavbarBrand, NavbarText, NavItem } from "reactstrap";
import MainNavBar from "./Components/MainNavBar";

function App(args) {



  return (
    <Router>
      <div>
        <MainNavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Outras rotas */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
