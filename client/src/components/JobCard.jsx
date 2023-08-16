import React, { useState } from "react";

import PropTypes from "prop-types";
import "./JobCard.css";

const JobCard = ({ jobs, onJobClick }) => {
    const [selectedJobSlug, setSelectedJobSlug] = useState(jobs[0]?.job_id);

    const handleCardClick = (job) => {
        setSelectedJobSlug(job.job_id);
        onJobClick(job);
    };

    const handleKeyPress = (event, job) => {
        if (event.key === "Enter") {
            handleCardClick(job);
        }
    };

    return (
        <div>
            {jobs.map((job) => (
                <div
                    key={job.job_id}
                    className={`job-card ${
                        selectedJobSlug === job.job_id ? "highlighted" : ""
                    }`}
                    onClick={() => handleCardClick(job)}
                    onKeyDown={(event) => handleKeyPress(event, job)}
                    tabIndex={0}
                    role="button"
                >
                    <div className="job-title">{job.job_title}</div>
                    <div className="company-name">{job.job_company_name}</div>
                    <div className="location">{job.registered_office}</div>
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