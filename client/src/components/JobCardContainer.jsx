import React from "react";
import JobCard from "./JobCard.jsx";

const JobCardContainer = ({ jobs, onJobClick }) => {
	return (
		<div>
			<JobCard jobs={jobs} onJobClick={onJobClick} />
		</div>
	);
};

export default JobCardContainer;
