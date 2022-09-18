import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import './Navbar.css'
import AboutMe from "../../pages/AboutMe/AboutMe"
import Projects from "../../pages/Projects/Projects"
import Error from "../../pages/Error/Error"
import InputSearch from '../../components/UI/inputs/InputSearch'

function Navbar() {

    return (
        <BrowserRouter>
            <nav className="navbar">
                <div>
                    <NavLink to="/AboutMe"><span data-hover="О себе">О себе</span></NavLink>
                    <NavLink to="/Projects"><span data-hover="Проекты">Проекты</span></NavLink>
                    <InputSearch />
                </div>
            </nav>
            <Routes>
                <Route path="/AboutMe" element={<AboutMe />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )

}

export default Navbar;