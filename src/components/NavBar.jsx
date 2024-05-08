import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import massageLogo from '../assets/massageLogo.png';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="py-2"> {/* Adicionando a classe py-2 para diminuir o padding vertical */}
      {/* Menu normal */}
      <div className="d-none d-sm-block">
        <div className="d-flex justify-content-between align-items-end">
          <nav className="navbar navbar-expand-sm navbar-light m-2 w-100">
            <div>
              <img src={massageLogo} alt="Logo" className="navbar-brand" onClick={closeMenu} />
            </div>
            <ul className="navbar-nav mb-2 ms-auto">
              <li className="nav-item mx-3"> {/* Diminuindo a margem horizontal */}
                <NavLink
                  to="/"
                  className={({ isActive }) => `nav-link fs-5 ${isActive ? 'text-primary ' : 'text-dark'}`}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink
                  to="/masaje"
                  className={({ isActive }) => `nav-link fs-5 ${isActive ? 'text-primary ' : 'text-dark'}`}
                >
                  Masaje
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink
                  to="/trainer"
                  className={({ isActive }) => `nav-link fs-5 ${isActive ? 'text-primary ' : 'text-dark'}`}
                >
                  Trainer
                </NavLink>
              </li>
              <li className="nav-item mx-3">
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

      {/* Renderizando a logo fora do menu hamburguês */}
      <div>
        <img src={massageLogo} alt="Logo" className="navbar-brand d-block d-sm-none mx-auto" style={{ maxWidth: '200px' }} />
      </div>

      {/* Menu hamburguês */}
      <div className="d-block d-sm-none">
        <div className="d-flex justify-content-between align-items-end">
          <Menu right width={300} isOpen={menuOpen} onStateChange={({ isOpen }) => setMenuOpen(isOpen)}>
            <NavLink to="/" className="navbar-brand" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/masaje" className="nav-link" onClick={closeMenu}>Masaje</NavLink>
            <NavLink to="/trainer" className="nav-link" onClick={closeMenu}>Trainer</NavLink>
            <NavLink to="/contacto" className="nav-link" onClick={closeMenu}>Contacto</NavLink>
          </Menu>
          {/* Ícone manual do menu hamburguês */}
          <button className="navbar-toggler d-block d-sm-none" type="button" onClick={handleMenuClick}>
            <span className="navbar-toggler-icon" style={{ fontSize: '2rem' }}>&#9776;</span>
          </button>
        </div>
      </div>
    </div>
  );
};
