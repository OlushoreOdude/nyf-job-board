import SearchForm from "../components/SearchForm.jsx";
import JobCardContainer from "../components/JobCardContainer.jsx";
import React, { useEffect, useState } from "react";
import axios from "axios";

import SelectedJob from "../components/SelectedJob.jsx";

import "../global.css";
import "./Home.css";


function Home() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [jobsData, setJobsData] = useState([]);
	const [selectedJob, setSelectedJob] = useState(null);

	useEffect(() => {
		// Fetch data from server
		const fetchJobs = async () => {
			try {
				const response = await axios.get("/api/jobs");
				console.log("Response:", response.data); // Log the entire response data
				setJobsData(response.data.data.dataT.slice(0,10));
				setLoading(false);
			}catch(error){
				console.log(error);
				setError("Failed to fetch jobs data from the server");
				setLoading(false);
			}
		};

		fetchJobs();
	}, []);

const handleJobClick = (job) => {
	setSelectedJob(job);
	// Find the selected job section and scroll to it
	const selectedJobSection = document.querySelector(".selected-job-section");
	if (selectedJobSection) {
		selectedJobSection.scrollIntoView({ behavior: "smooth" });
	}
};


	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>{error}</p>;
	}

	if (!jobsData || jobsData.length === 0) {
		return <p>No jobs data available.</p>;
	}

	const handleSearchByTitle = async (titleFilterInput)=>{
		const { title, location, is_remote } = titleFilterInput;
		const response = await axios.get(`/api/jobs-Arbeit?title=${title}&location=${location}&is_remote=${is_remote}`);
		console.log(response.data);
		setJobsData(response.data.data.slice(0, 10));
};

	return (
		<main role="main" className="main-content">
			{/* First Column: Job Search */}
			<div className="job-search-section">
				<SearchForm onClick={handleSearchByTitle} className="job-search-input" />
			</div>

			{/* Second Column: Job Card Container which will show 10 job card*/}
			<div className="job-card-section">
				<JobCardContainer jobs={jobsData} onJobClick={handleJobClick} />
			</div>

			{/* Third Column: Selected Job Details */}
			<div className="selected-job-section">
				<SelectedJob selectedJob={selectedJob} jobs={jobsData} />
			</div>
		</main>
	);
}

export default Home;
