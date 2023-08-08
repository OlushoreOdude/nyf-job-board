import Search from "../components/Search.jsx";
import JobCardContainer from "../components/JobCardContainer.jsx";
import React, { useEffect, useState } from "react";
import axios from "axios";

import "../global.css";
import "./Home.css";

function Home() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [jobsData, setJobsData] = useState([]);

	useEffect(() => {
		// Fetch data from server
		const fetchJobs = async () => {
			try {
				const response = await axios.get("/api/jobs");
				console.log(response);
				setJobsData(response.data.data.slice(0, 10)); // Only take the first 10 jobs
				setLoading(false);
			} catch (error) {
				console.log(error);
				setError("Failed to fetch jobs data from the server");
				setLoading(false);
			}
		};

		fetchJobs();
	}, []);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>{error}</p>;
	}

	if (!jobsData || jobsData.length === 0) {
		return <p>No jobs data available.</p>;
	}
	return (
		<main role="main" className="main-content">
			{/* First Column: Job Search */}
			<div className="job-search-container">
				<Search className="job-search-input" />
			</div>

			{/* Second Column: Job Card Container which will show 10 job card*/}
			<div className="job-card-container">
				<JobCardContainer jobs={ jobsData } />
			</div>

			{/* Third Column: Selected Job Details */}
			<div className="selected-job-container">
						<h4>No job is selected</h4>
			</div>
		</main>
	);
}

export default Home;
