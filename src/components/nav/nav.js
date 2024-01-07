import React, { useState } from "react";
import './nav.css'
import { Link, NavLink} from "react-router-dom";

const Nav = () =>{
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className = "nav-custom fixed-top">
        <Link to="/" className="title">
        <img src = "Assets/images/logo.png" className = "logo" alt = "Logo" />
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/services">Services</NavLink>
        </li>
        <li>
            <NavLink to="/contact">Contact</NavLink>
        </li>
        </ul>
        </nav>
        )
}

export default Nav