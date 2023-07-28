import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

export function Home() {
	const [message, setMessage] = useState("Loading...");

	useEffect(() => {
		fetch("/api")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setMessage(body.message);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<main role="main" className="main-content">
			<div>
				<Link to="/about/this/site">About</Link>
				<Link to="/jobs">Jobs</Link>
				<h1 className="message" data-qa="message">
					{`${message} Hello testing`}
				</h1>
			</div>
		</main>
	);
}

export default Home;
