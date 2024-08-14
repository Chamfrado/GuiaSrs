import "./App.css";
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
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
