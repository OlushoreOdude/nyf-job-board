import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

import CYFLogo from "../Assets/cyf_brand_Logo.png";

import Joblogo from "../Assets/JobLogo.png";

const Header = () => {
    return (
        <header className="header-container">
            <div className="header-logo">
                <img src={CYFLogo} alt="CYF Logo" />
            </div>
            <div className="header-job-board">
                <img src={Joblogo} alt="J Logo" />
                <h4>Job Board</h4>
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