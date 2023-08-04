import React from "react";

const JobCardContainer = ({ jobs }) => {

  return (
		<div>
			{jobs.map((job) => (
				// line 9 to 13 should be a separate component called JobCard.jsx to display one job
				<div key={job.slug}>
					<strong>Title:</strong> {job.title} <br />
					<strong>Location:</strong> {job.location}
				</div>
			))}
		</div>
	);
};


export default JobCardContainer;