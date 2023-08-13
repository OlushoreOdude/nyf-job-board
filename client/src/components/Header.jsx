import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

import CYFLogo from "../Assets/cyf_brand_Logo.png";


const Header = () => {
    return (
        <header className="header-container">
            <div className="header-logo">
                <img src={CYFLogo} alt="CYF Logo" />
            </div>
            <nav className="header-nav">
                <NavLink exact to="/" className="nav-link">
                    Home
                </NavLink>
                <NavLink to="/searchjobsdb" className="nav-link">
                    SearchDb
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
