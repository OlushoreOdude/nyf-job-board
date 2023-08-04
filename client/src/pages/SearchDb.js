
import { useEffect, useState } from "react";
import "./SearchDb.css";
import CardButtonShowJob from "../components/CardButtonShowJob.jsx";
import SearchOnDb from "../components/SearchOnDb.jsx";

//
export function SearchDb() {
const [message, setMessage] = useState("Loading...");
const [jobListings, setJobListings] = useState([]);
const [selectedCard, setSelectedCard] = useState(null);
const [seachJobs, setSeachJobs] = useState([]);
const [searchInput, setSearchInput] = useState("");
const handleCardClick = (job) => {
	setSelectedCard(job);
	console.log(selectedCard);
};
useEffect(() => {
	fetch("/api")
		.then((res) => {
			if (!res.ok) {
				throw new Error(res.statusText);
			}
			return res.json();
		})
		.then((body) => {
			setMessage(body.message);
		})
		.catch((err) => {
			console.error(err);
		});
}, []);

// get jobs from the test route on the server
useEffect(() => {
	fetch("/api/jobs-test")
		.then((res) => {
			if (!res.ok) {
				throw new Error(res.statusText);
			}
			return res.json();
		})
		.then((body) => {
			setJobListings(body.data.jobs);
			console.log(body);
			console.log(body.data.jobs);
		})
		.catch((err) => {
			console.error(err);
		});
}, []);

useEffect(() => {
	console.log(seachJobs); // This will show the updated value of seachJobs whenever it changes
}, [seachJobs]); // The useEffect will run whenever seachJobs changes

const search = (searchVal) => {
	setSeachJobs([...jobListings]);
	console.log(seachJobs, jobListings, "lobs");

	console.log(searchVal === "all");

	if (searchVal === "ALL") {
		setSeachJobs([...jobListings]);
	} else {
		const filteredJobs = jobListings.filter(
			({ job_title, company }) =>
				job_title.toLowerCase().includes(searchVal.toLowerCase()) ||
				company.toLowerCase().includes(searchVal.toLowerCase())
		);

		console.log(filteredJobs, "filtered jobs");

		setSeachJobs(filteredJobs);
	}
};

const handleSearchInputChange = (event) => {
	const inputValue = event.target.value;
	console.log(inputValue, "input in handle change ");
	setSearchInput(inputValue);
	console.log(searchInput, "in handl echange");
	search(inputValue);
};
const onSubmitHandler = (event) => {
	event.preventDefault();
	search(searchInput);
	console.log(event.target, "target 1");
	console.log(searchInput);

	setSearchInput("");
	console.log("submited");
};


	return (
		<div className="container">
			<section className="section">
				<h1 className="message" data-qa="message">
					{`SEARCH  ${message} `}
				</h1>
				<SearchOnDb
					search={search}
					handleSearchInputChange={handleSearchInputChange}
					handleSubmit={onSubmitHandler}
					value={searchInput}
				/>
				{seachJobs.length > 0 ? (
					<p>{`${seachJobs.length} matches found`}</p>
				) : searchInput ? (
					<p>No job listings found.</p>
				) : (
					<p>Search for a job</p>
				)}

			</section>
			<section className="section">
				<h1 className="message" data-qa="message">
					{`FILTERED ${message}`}
				</h1>
				{seachJobs.length > 0 ? (
					seachJobs.map((job, index) => (
						<CardButtonShowJob
							key={index}
							data={job}
							onClick={() => handleCardClick(job)}
						/>
					))
				) : searchInput ? (
					<>
						<p>Your search did not return a listing. Check out more below.</p>
						{jobListings.map((job, index) => (
							<CardButtonShowJob
								key={index}
								data={job}
								onClick={() => handleCardClick(job)}
							/>
						))}
					</>
				) : (
					jobListings.map((job, index) => (
						<CardButtonShowJob
							key={index}
							data={job}
							onClick={() => handleCardClick(job)}
						/>
					))
				)}
			</section>
		</div>
	);
}

export default SearchDb;


