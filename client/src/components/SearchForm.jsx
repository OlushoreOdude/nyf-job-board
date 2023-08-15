import React, { useState } from "react";

import "./SearchForm.css";

const SearchForm = (props) => {
  const { onClick } = props;
  const [isRemote, setIsRemote] = useState(false);

  const handleCheckboxChange = (event) => {
    const value = event.target.checked;
    setIsRemote(value);
  };

  const handeleOnSubmit = (event) => {
    event.preventDefault();
    const { title, location } = event.target.elements;
    onClick({
      title: title.value,
      location: location.value,
      is_remote: isRemote,
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
          <h5>Filter by location</h5>
          <input
            name="location"
            type="text"
            className="job-input"
            placeholder="Location..."
          />
          <div className="job-type-container">
            <h5>Filter by job type</h5>
            <label>
              <input
                type="checkbox"
                value="remote"
                checked={isRemote}
                onChange={handleCheckboxChange}
              />
              Remote
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