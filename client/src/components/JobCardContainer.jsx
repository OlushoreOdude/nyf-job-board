import React from "react";

const JobCardContainer = ({ jobs }) => {
  return (
    <ul>
      {jobs.map((job, index) => (
        <li key={index}>
          <strong>{job.title}</strong> - {job.location}
        </li>
      ))}
    </ul>
  );
};

export default JobCardContainer;