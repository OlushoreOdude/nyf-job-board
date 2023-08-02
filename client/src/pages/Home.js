import { Link } from "react-router-dom";
import Search  from "../components/Search.jsx";
import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Home.css";

function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("/api/jobs");
        const jobData = response.data.data;
        setJobs(jobData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <main role="main" className="main-content">
      <div>
        <h1 className="message" data-qa="message">
          Jobs Board
        </h1>
		<Search />
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              <strong>{job.title}</strong> - {job.location}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Home;