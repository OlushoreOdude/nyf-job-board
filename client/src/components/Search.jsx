import React, { useState, useEffect } from "react";

const Search = () => {
  const [result, setResult] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResult, setFilteredResult] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = () => {
    fetch("/api/jobs")
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((body) => {
        setResult(body.data.jobs);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const filterByTitle = () => {
    const filteredJobs = result.filter(
      (job) => job.job_title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredResult(filteredJobs);
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <div>
        <h4>Search for job by title</h4>
        <input
          className="job-input"
          placeholder="Job title..."
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <button className="btn-search" onClick={filterByTitle}>
          Search
        </button>
        <table>
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Company</th>
              <th>Location</th>
              <th>Description</th>
              <th>Apply</th>
            </tr>
          </thead>
          <tbody>
            {/* Check if filteredResult is an array before using map */}
            {Array.isArray(filteredResult) ? (
              filteredResult.map((job) => (
                <tr key={job.job_id}>
                  <td>{job.job_title}</td>
                  <td>{job.company}</td>
                  <td>{job.location}</td>
                  <td>{job.description}</td>
                  <td>
                    <button className="btn-apply">Apply</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No jobs found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div>
        <label htmlFor="select-option">Search filters</label>
        <select id="select-option">
          <option>London</option>
          <option>Reading</option>
          <option>Southampton</option>
        </select>
      </div>
    </>
  );
};

export default Search;
