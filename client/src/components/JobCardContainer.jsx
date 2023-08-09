import React from "react";

import "./JobCardContainer.css";
import JobCard from "./JobCard.jsx";

const JobCardContainer = ({ jobs, onJobClick }) => {
	return (
		<div className="job-card-container">
			<JobCard jobs={jobs} onJobClick={onJobClick} />
		</div>
	);
};

export default JobCardContainer;
