import React from "react";

const SearchForm = (props) => {
  const { onClick }  = props;
  const handeleOnSubmit =(event) =>{
    event.preventDefault();
    console.log(event.target.elements.title.value);
    console.log(event.target.elements.location.value);
    const { title,location } = event.target.elements;
    onClick({
      title: title.value,
      location: location.value,
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
          <button className="btn-search" type="submit">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchForm;
