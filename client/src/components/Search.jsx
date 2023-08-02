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
        
      </div>

      
    </>
  );
};

export default Search;
