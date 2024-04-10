import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      {/* Menu normal */}
      <div className="d-none d-sm-block">
        <div className="d-flex justify-content-between align-items-end">
          <nav className="navbar navbar-expand-sm navbar-light m-2 w-100">
            <div>Logo</div>
            <ul className="navbar-nav mb-2 ms-auto">
              <li className="nav-item mx-5">
                <NavLink
                  to="/"
                  className={({ isActive }) => `nav-link fs-5 ${isActive ? 'text-primary ' : 'text-dark'}`}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-5">
                <NavLink
                  to="/masaje"
                  className={({ isActive }) => `nav-link fs-5 ${isActive ? 'text-primary ' : 'text-dark'}`}
                >
                  Masaje
                </NavLink>
              </li>
              <li className="nav-item mx-5">
                <NavLink
                  to="/trainer"
                  className={({ isActive }) => `nav-link fs-5 ${isActive ? 'text-primary ' : 'text-dark'}`}
                >
                  Trainer
                </NavLink>
              </li>
              <li className="nav-item mx-5">
                <NavLink
                  to="/tarifas"
                  className={({ isActive }) => `nav-link fs-5 ${isActive ? 'text-primary ' : 'text-dark'}`}
                >
                  Tarifas
                </NavLink>
              </li>
              <li className="nav-item mx-5">
                <NavLink
                  to="/contacto"
                  className={({ isActive }) => `nav-link fs-5 ${isActive ? 'text-primary ' : 'text-dark'}`}
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Menu hamburguer */}
      <div className="d-block d-sm-none">
        <div className="d-flex justify-content-between align-items-end">
          <Menu right width={300} isOpen={menuOpen} onStateChange={({ isOpen }) => setMenuOpen(isOpen)}>
            <NavLink to="/" className="navbar-brand" onClick={closeMenu}>Massage Trainer</NavLink>
            <NavLink exact to="/" className="nav-link" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/masaje" className="nav-link" onClick={closeMenu}>Masaje</NavLink>
            <NavLink to="/trainer" className="nav-link" onClick={closeMenu}>Trainer</NavLink>
            <NavLink to="/tarifas" className="nav-link" onClick={closeMenu}>Tarifas</NavLink>
            <NavLink to="/contacto" className="nav-link" onClick={closeMenu}>Contacto</NavLink>
          </Menu>
          {/* Ícone manual do menu hamburguer */}
          <button className="navbar-toggler d-block d-sm-none" type="button" onClick={handleMenuClick}>
          <span className="navbar-toggler-icon" style={{ fontSize: '2rem' }}>&#9776;</span>

          </button>
        </div>
      </div>
    </div>
  );
};
