import React,{ useState } from "react";

const SearchForm = (props) => {
  const { onClick }  = props;
  /*const handeleOnSubmit =(event) =>{
    event.preventDefault();
    console.log(event.target.elements.title.value);
    console.log(event.target.elements.location.value);
    console.log(event.target.elements.job_type.value);
    const { title,location,job_type } = event.target.elements;
    onClick({
      title: title.value,
      location: location.value,
      job_type: job_type.value,
    });*/

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
          <button className="btn-search" type="submit">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchForm;
