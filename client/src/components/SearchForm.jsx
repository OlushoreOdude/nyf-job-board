import React from "react";

const SearchForm = (props) => {
  const { onClick }  = props;
  const handeleOnSubmit =(event) =>{
    event.preventDefault();
    console.log(event.target.elements.title.value);
    console.log(event.target.elements.location.value);
    console.log(event.target.elements.job_type.value);
    const { title,location,job_type } = event.target.elements;
    onClick({
      title: title.value,
      location: location.value,
      job_type: job_type.value,
    });
  };
  return (
    <>
      <div>
        <h4>Search form</h4>
        <form onSubmit={handeleOnSubmit}>
          <input
            name="title"
            type="text"
            className="job-input"
            placeholder="Job title..."
          />
          <input
            name="location"
            type="text"
            className="job-input"
            placeholder="Location..."
          />
          <input
            name="job_type"
            type="text"
            className="job-input"
            placeholder="Job type..."
          />
          <button className="btn-search" type="submit">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchForm;
