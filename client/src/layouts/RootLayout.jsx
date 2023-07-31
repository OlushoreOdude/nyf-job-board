import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "./rootLayout.css";

export default function RootLayout() {
	return (
		<div className="app">
			<Header />
			<main className="main-content">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
