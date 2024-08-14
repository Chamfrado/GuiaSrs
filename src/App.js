import "./App.css";
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Cidade'; // Certifique-se de que a capitalização corresponda
import { Nav, Navbar, NavbarBrand, NavbarText, NavItem } from "reactstrap";
import MainNavBar from "./Components/MainNavBar";
import AppRoutes from "./router/router";

function App(args) {



  return (
    <Router>
      <div>
        <AppRoutes/>
      </div>
    </Router>
  );
}

export default App;
