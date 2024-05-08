import React from 'react'
import {NavLink} from 'react-router-dom'
import {slide as Menu} from 'react-burger-menu'


export const NavBar2 = () => {
  return (
    
    <div className="d-flex justify-content-between align-items-end">
    <Menu right width={300} disableAutoFocus>
      <NavLink to="/" className="navbar-brand">Massage Trainer</NavLink>
      <NavLink exact to="/" className="nav-link">Home</NavLink>
      <NavLink to="/masaje" className="nav-link">Masaje</NavLink>
      <NavLink to="/trainer" className="nav-link">Trainer</NavLink>
      <NavLink to="/contacto" className="nav-link">Contacto</NavLink>
    </Menu>
  </div>



  )
}
