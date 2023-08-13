import React, { useState } from "react";

import "./SearchForm.css";

const SearchForm = (props) => {
  const { onClick } = props;
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (selectedJobTypes.includes(value)) {
      setSelectedJobTypes(selectedJobTypes.filter((type) => type !== value));
    } else {
      setSelectedJobTypes([...selectedJobTypes, value]);
    }
  };

  const handeleOnSubmit = (event) => {
    event.preventDefault();
    const { title, location } = event.target.elements;
    onClick({
      title: title.value,
      location: location.value,
      job_type: selectedJobTypes.join(", "), // Convert array to comma-separated string
    });
  };
  return (
    <>
      <div className="search-form-container">
        <h4 className="search-heading">Search jobs</h4>
        <form onSubmit={handeleOnSubmit} className="search-form">
          <input
            name="title"
            type="text"
            className="job-input"
            placeholder="Job title..."
          />
          <h4 className="search-heading">Search filters</h4>
          <h5>Search by location</h5>
          <input
            name="location"
            type="text"
            className="job-input"
            placeholder="Location..."
          />
          <div>
            <label>
              Job Type:
              Hybride
              <input
                type="checkbox"
                value="hybrid"
                checked={selectedJobTypes.includes("hybrid")}
                onChange={handleCheckboxChange}
              />
            </label>
            <label>
              Remote
              <input
                type="checkbox"
                value="remote"
                checked={selectedJobTypes.includes("remote")}
                onChange={handleCheckboxChange}
              />
            </label>
            <label>
              Onsite
              <input
                type="checkbox"
                value="onsite"
                checked={selectedJobTypes.includes("onsite")}
                onChange={handleCheckboxChange}
              />
            </label>
          </div>
          <button className="btn-show-results" type="submit">
          SHOW RESULTS
        </button>
        </form>
      </div>
    </>
  );
};

export default SearchForm;
