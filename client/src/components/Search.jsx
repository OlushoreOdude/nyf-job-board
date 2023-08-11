import React, { useState, useEffect } from "react";

import "./Search.css";

const Search = () => {
	const [result, setResult] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const [filteredResult, setFilteredResult] = useState([]);

	const [showRecent, setShowRecent] = useState(false); // State for the checkbox

	useEffect(() => {
		fetchJobs();
	}, []);

	const fetchJobs = () => {
		fetch("/api/jobs")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setResult(body.data.jobs);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const filterByTitle = () => {
		const filteredJobs = result.filter((job) =>
			job.job_title.toLowerCase().includes(searchInput.toLowerCase())
		);

		// Apply checkbox filtering if showRecent is true
		const filteredJobsByDate = showRecent
			? filteredJobs.filter((job) => true)
			: filteredJobs; // This should be modified to filter the jobs by date once we have our DB running

		setFilteredResult(filteredJobsByDate);
	};

	const handleSearchInputChange = (e) => {
		setSearchInput(e.target.value);
	};

	const handleShowRecentChange = (e) => {
		setShowRecent(e.target.checked);
	};

	return (
		<div className="search-section">
			<h4>Search jobs</h4>
			<input
				className="job-input"
				placeholder="Job title..."
				value={searchInput}
				onChange={handleSearchInputChange}
			/>
			<button className="btn-search" onClick={filterByTitle}>
				Search
			</button>

			{/* Checkbox for recent jobs */}
			<div className="checkbox-container">
				<label>
					<input
						type="checkbox"
						checked={showRecent}
						onChange={handleShowRecentChange}
					/>
					Only show recent jobs
				</label>
			</div>
		</div>
	);
};

export default Search;
