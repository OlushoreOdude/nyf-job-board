import React from "react";

const JobCard = ({ jobs }) => {
	return (
		<div>
			{jobs.map((job) => (
				<div key={job.slug} className="job-card"> {/* onClick={job.onClick} should be added */}
					<strong>Title:</strong> {job.title} <br />
					<strong>Location:</strong> {job.location}
				</div>
			))}
		</div>
	);
};

export default JobCard;
