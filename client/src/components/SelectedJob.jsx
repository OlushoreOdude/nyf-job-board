import React from "react";
import PropTypes from "prop-types";

const SelectedJob = ({ selectedJob, jobs }) => {
	if (!selectedJob && jobs.length > 0) {
		// Display details of the first job if no job is selected
		selectedJob = jobs[0];
	}

	return (
		<div className="selected-job-container">
			<h4>Selected Job Details:</h4>
			{selectedJob && (
				<div className="selected-job">
					<strong>Title:</strong> {selectedJob.title} <br />
					<strong>Location:</strong> {selectedJob.location} <br />
					<strong>Description:</strong>
					<div
						className="description-content"
						dangerouslySetInnerHTML={{ __html: selectedJob.description }}
						// Using dangerouslySetInnerHTML is generally discouraged in React, as it can open up security vulnerabilities. This must be changed once we have the DB schema up and running and we get the data from the internal API.
					/>
				</div>
			)}
		</div>
	);
};

SelectedJob.propTypes = {
	selectedJob: PropTypes.shape({
		title: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		// Add other prop types for job details here
	}),
	jobs: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			location: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			// Add other prop types for job details here
		})
	).isRequired,
};

export default SelectedJob;
