import React from "react";
import PropTypes from "prop-types";

import "./SelectedJob.css";

const SelectedJob = ({ selectedJob, jobs }) => {
	let jobToDisplay = selectedJob;

	if (!jobToDisplay && jobs.length > 0) {
		// Display details of the first job if no job is selected
		jobToDisplay = jobs[0];
	}

  return (
		<div className="selected-job-container">
			{jobToDisplay && (
				<div className="selected-job">
					<h4>Selected Job Details:</h4>
					<strong>Title:</strong> {jobToDisplay.title} <br />
					<strong>Location:</strong> {jobToDisplay.location} <br />
					<strong>Description:</strong>
					<div
						className="description-content"
						dangerouslySetInnerHTML={{
							__html: jobToDisplay.description,
						}}
					/>
				</div>
			)}
			{!jobToDisplay && (
				<div className="no-job-selected">No job selected or available.</div>
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
