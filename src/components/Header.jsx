import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from "../img/logo.svg"

const Header = () => {
    return(
        <>
            <header>
                <div className = "main-container">
                    <div className = "header-content">
                        <NavLink to = "/">
                            <img src = {logo} alt=""></img>
                        </NavLink>
                        <nav>
                            <ul>
                                <li><NavLink to = "/films">Фильмы</NavLink></li>
                                <li><NavLink to = "/serials">Сериалы</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;