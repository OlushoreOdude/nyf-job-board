import React from "react";

const JobCardContainer = ({ jobs }) => {

  return (
    <>
      <ul>
        {jobs.map((job) => (
        // line 9 to 13 should be a seperate component called JobCard.jsx to display one job
          <li key={job.slug}>
            <strong>Title:</strong> {job.title} <br />
            <strong>Location:</strong> {job.location}
          </li>
        ))}
      </ul>
    </>
  );
};


export default JobCardContainer;