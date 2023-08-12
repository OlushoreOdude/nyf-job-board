import React, { useState } from "react";

const SearchForm = (props) => {
  const { onClick }  = props;
  const [input, setInput] =useState("");
  const handeleOnClick =() =>{
    onClick(input);
  };

  return (
    <>
      <div>
        <h4>Search form</h4>
        <input
          className="job-input"
          placeholder="Job title..."
          onChange = {(event)=>{
            setInput(event.target.value);
          }
        }
        />
        <button className="btn-search" onClick={handeleOnClick}>
          Search
        </button>
      </div>
    </>
  );
};

export default SearchForm;
