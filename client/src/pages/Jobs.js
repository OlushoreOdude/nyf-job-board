import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

export function Jobs() {
	const [jobListings, setJobListings] = useState([]);

// get jobs from the test route on the server
	useEffect(() => {
		fetch("/api/jobs")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setJobListings(body.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<main role="main">
			<div>
				<h1 className="message" data-qa="message">
					test
				</h1>
				{jobListings.length > 0 ? (
					jobListings.map((job, index) => <p key={index}>{job.job_title}</p>)
				) : (
					<p>No job listings found.</p>
				)}
				<Link to="/">home</Link>
			</div>
		</main>
	);
}

export default Jobs;


