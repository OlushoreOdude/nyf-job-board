import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header className="header-container">
			<h1 className="header-job-board">Job Board</h1>
			<nav className="header-nav">
				<NavLink exact="true" to="/">
					Home
				</NavLink>
				<NavLink to="/searchjobsdb">SearchDb</NavLink>
			</nav>
		</header>
	);
};

export default Header;
