import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import massageLogo from '../assets/massageLogo.png';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576); // Define se está em modo responsivo

  // Atualiza o estado 'isMobile' quando a largura da janela muda
  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 576);
    };
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="py-2 d-flex align-items-center justify-content-between"> {/* Adicionando classe para flexbox */}
      {/* Logo */}
      <div>
        <img src={massageLogo} alt="Logo" className="navbar-brand" onClick={closeMenu} />
      </div>
      {/* Menu hamburguês ou menu normal */}
      <div className="d-flex align-items-center"> {/* Contêiner flexível */}
        {/* Menu normal */}
        <div className="d-none d-sm-block">
          <div className="d-flex justify-content-between align-items-end">
            <nav className="navbar navbar-expand-sm navbar-light m-2 w-100">
              <ul className="navbar-nav mb-2 ms-auto">
                <li className="nav-item mx-3">
                  <NavLink
                    to="/"
                    className={({ isActive }) => `nav-link fs-5 ${isActive ? 'text-white ' : 'text-dark'}`}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item mx-3">
                  <NavLink
                    to="/masaje"
                    className={({ isActive }) => `nav-link fs-5 ${isActive ? 'text-white ' : 'text-dark'}`}
                  >
                    Masaje
                  </NavLink>
                </li>
                <li className="nav-item mx-3">
                  <NavLink
                    to="/trainer"
                    className={({ isActive }) => `nav-link fs-5 ${isActive ? 'text-white ' : 'text-dark'}`}
                  >
                    Trainer
                  </NavLink>
                </li>
                <li className="nav-item mx-3">
                  <NavLink
                    to="/contacto"
                    className={({ isActive }) => `nav-link fs-5 ${isActive ? 'text-white ' : 'text-dark'}`}
                  >
                    Contacto
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* Menu hamburguês */}
        {isMobile && (
          <>
            <Menu right width={300} isOpen={menuOpen} onStateChange={({ isOpen }) => setMenuOpen(isOpen)}>
              <NavLink to="/" className="nav-link text-white fs-5" onClick={closeMenu}>Home</NavLink>
              <NavLink to="/masaje" className="nav-link text-white fs-5" onClick={closeMenu}>Masaje</NavLink>
              <NavLink to="/trainer" className="nav-link text-white fs-5" onClick={closeMenu}>Trainer</NavLink>
              <NavLink to="/contacto" className="nav-link text-white fs-5" onClick={closeMenu}>Contacto</NavLink>
            </Menu>
            {/* Ícone manual do menu hamburguês */}
            <button className="navbar-toggler d-block d-sm-none" type="button" onClick={handleMenuClick}>
              <span className="navbar-toggler-icon" style={{ fontSize: '2rem' }}>&#9776;</span>
            </button>
          </>
        )}
      </div>
      {/* Div para a sombra que ocupa toda a página */}
      {menuOpen && <div className="bm-overlay position-fixed top-0 start-0 bottom-0 end-0 bg-dark opacity-50" onClick={closeMenu}></div>}
    </div>
  );
};
