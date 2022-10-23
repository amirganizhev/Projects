import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './Navbar.css'
import AboutMe from "../../pages/AboutMe/AboutMe"
import Projects from "../../pages/Projects/Projects"
import Error from "../../pages/Error/Error"

function Navbar() {

    return (
        <BrowserRouter>
            <nav className="navbar">
                <div>
                    <Link to="/"><span data-hover="О себе">О себе</span></Link>
                    <Link to="/Projects"><span data-hover="Проекты">Проекты</span></Link>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )

}

export default Navbar;