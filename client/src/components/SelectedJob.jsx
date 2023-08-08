import React from "react";

const SelectedJob = ({ selectedJob, jobs }) => {
	if (!selectedJob && jobs.length > 0) {
		// Display details of the first job if no job is selected
		selectedJob = jobs[0];
	}

	return (
		<div className="selected-job-container">
			<h4>This is the SelectedJob component and details of the selected job will be shown here:</h4>
		</div>
	);
};

export default SelectedJob;
