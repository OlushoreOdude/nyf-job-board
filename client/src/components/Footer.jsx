import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer-container">
			<div className="footer-social-links">
				<p>Social Links</p>
				{/* Add social links here */}
			</div>
			<div className="footer-copyright-disclaimer">
				<p>Copyright ©️ 2023 CodeYourFuture</p>
			</div>
			<div className="footer-community-links">
				<p>Community Links</p>
				{/* Add community links here */}
			</div>
		</footer>
	);
};

export default Footer;
