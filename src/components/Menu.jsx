import React from "react";
import Contatos from "../Pages/Contatos";
import Destinos from "../Pages/Destinos";
import NovoDestino from "../Pages/NovoDestino";
import EditaDestino from "../Pages/EditaDestino";
import DestinoById from "../Pages/DestinoById";
import Promocoes from "../Pages/Promocoes";
import Home from "../Pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

const Menu = () => {
  return (
    <Router>
      <header id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg stroke">
            <h1>
              <a className="navbar-brand mr-lg-5" href="index.html">
                Code<strong className="text-danger">&</strong>Travel
              </a>
            </h1>
            <button
              className="navbar-toggler  collapsed bg-gradient"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
              <span className="navbar-toggler-icon fa icon-close fa-times"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item ">
                  <NavLink className="nav-link" to="/home"
                  style={({ isActive }) => ({ color: isActive ? '#f83e3e' : '#3e3e3e' })}>
                      Home 
                      <span className="sr-only">(current)</span>                   
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/promocoes"
                  style={({ isActive }) => ({ color: isActive ? '#f83e3e' : '#3e3e3e' })}>                  
                      Promoções
                      <span className="sr-only">(current)</span>                  
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/destinos"
                  style={({ isActive }) => ({ color: isActive ? '#f83e3e' : '#3e3e3e' })}>
                        Destinos
                        <span className="sr-only">(current)</span> 
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contatos"
                  style={({ isActive }) => ({ color: isActive ? '#f83e3e' : '#3e3e3e' })}>
                        Contatos
                        <span className="sr-only">(current)</span> 
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="d-lg-block d-none">
              <a href="#" className="btn btn-style btn-secondary">
                Login
              </a>
            </div>
            <div className="mobile-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                  <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="mode-container">
                      <i className="gg-sun"></i>
                      <i className="gg-moon"></i>
                    </div>
                  </label>
                </div>
              </nav>
            </div>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/destinos/novo" element={<NovoDestino />} />
        <Route path="/destinos/novo/:id" element={<EditaDestino />} />
        <Route path="/destino/:id" element={<DestinoById />} />
        <Route path="/promocoes" element={<Promocoes />} />
        <Route path="/contatos" element={<Contatos />} />
      </Routes>
    </Router>
  );
};

export default Menu;
