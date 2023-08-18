import React from "react";

import "./JobCardContainer.css";
import JobCard from "./JobCard.jsx";

const JobCardContainer = ({ jobs, onJobClick, selectedJob }) => {
	return (
		<div className="job-card-container">
			<JobCard jobs={jobs} onJobClick={onJobClick} selectedJob={selectedJob} />
		</div>
	);
};

export default JobCardContainer;
