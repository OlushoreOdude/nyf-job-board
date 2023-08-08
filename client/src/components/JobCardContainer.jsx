import React from "react";
import JobCard from "./JobCard.jsx";

const JobCardContainer = ({ jobs }) => {
	return (
		<div>
			<JobCard jobs={jobs} />
		</div>
	);
};

export default JobCardContainer;
