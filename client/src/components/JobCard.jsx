import React from "react";
import PropTypes from "prop-types";

import "./JobCard.css";

const JobCard = ({ jobs, onJobClick }) => {
	const handleKeyPress = (event, job) => {
		if (event.key === "Enter") {
			onJobClick(job);
		}
	};

	return (
		<div>
			{jobs.map((job) => (
				<div
					key={job.slug}
					className="job-card"
					onClick={() => onJobClick(job)}
					onKeyDown={(event) => handleKeyPress(event, job)}
					tabIndex={0}
					role="button"
				>
					<div className="job-title">{job.title}</div>
					<div className="company-name">{job.company_name}</div>
					<div className="location">{job.location}</div>
					<button className="job-details-btn">View Details</button>
				</div>
			))}
		</div>
	);
};

JobCard.propTypes = {
	jobs: PropTypes.array.isRequired,
	onJobClick: PropTypes.func.isRequired,
};

export default JobCard;
