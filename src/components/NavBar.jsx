import React from 'react'
import { NavLink, Link } from "react-router-dom"

export const NavBar = () => {


    return (
        <div class="d-flex justify-content-between align-items-end">
           
            <nav class="navbar navbar-expand-sm navbar-light m-2 w-100 ">
               <div>logo</div>
                <ul className='navbar-nav mb-2 ms-auto '>

                    <li className='nav-item mx-5'>

                        <NavLink
                            to="/"
                            className={({ isActive }) => `nav-link fs-5 ${isActive ? 'text-primary ' : 'text-dark'}`}>
                            Home
                        </NavLink>

                    </li>

                    <li className='nav-item mx-5'>

                        <NavLink
                            to="/masaje"
                            className={({ isActive }) => `nav-link fs-5 ${isActive ? 'text-primary ' : 'text-dark'}`}>
                            Masaje
                        </NavLink>

                    </li>


                    <li className='nav-item mx-5'>

                        <NavLink
                            to="/trainer"
                            className={({ isActive }) => `nav-link fs-5 ${isActive ? 'text-primary ' : 'text-dark'}`}>
                            Trainer
                        </NavLink>

                    </li>

                    <li className='nav-item mx-5'>

                        <NavLink
                            to="/tarifas"
                            className={({ isActive }) => `nav-link fs-5 ${isActive ? 'text-primary ' : 'text-dark'}`}>
                            Tarifas
                        </NavLink>

                    </li>

                    <li className='nav-item mx-5'>


                        <NavLink
                            to="/contacto"
                            className={({ isActive }) => `nav-link fs-5 ${isActive ? 'text-primary ' : 'text-dark'}`}>
                            Contacto
                        </NavLink>

                    </li>



                </ul>

            </nav>

        </div>
    )
}




















