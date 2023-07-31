import React from "react";
import { NavLink } from "react-router-dom";
//import "./header.css";
import "./Header.css";

const Header = () => {
	return (
		<header className="header-container">
			<h1 className="header-job-board">Job Board</h1>
			<nav className="header-nav">
				<NavLink exact="true" to="/">
					Home
				</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/searchjobs">Search</NavLink>
				<NavLink to="/jobstest">Jobtest</NavLink>
				<NavLink to="/login">Login</NavLink>
				<NavLink to="/signout">Signout</NavLink>
			</nav>
		</header>
	);
};

export default Header;
