import React from "react";
import PropTypes from "prop-types";

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
					// onClick={() => onJobClick(job)}
					onKeyDown={(event) => handleKeyPress(event, job)} // Add keyDown event listener
					tabIndex={0}
					role="button"
				>
					<strong>Title:</strong> {job.title} <br />
					<strong>Location:</strong> {job.location}
				</div>
			))}
		</div>
	);
};

JobCard.propTypes = {
	jobs: PropTypes.array.isRequired,
	// onJobClick: PropTypes.func.isRequired,
};

export default JobCard;
