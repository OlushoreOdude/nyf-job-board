import { useEffect, useState } from "react";
import { useRef } from "react";
import "./SearchDb.css";
import CardButtonShowJob from "../components/CardButtonShowJob.jsx";
import SearchOnDb from "../components/SearchOnDb.jsx";
import CardBigOne from "../components/CardBigOne.jsx";
import axios from "axios";

//
export function SearchDb() {
	const [message, setMessage] = useState("Loading...");
	const [jobListings, setJobListings] = useState([]);
	const [selectedCard, setSelectedCard] = useState(null);
	const [seachJobs, setSeachJobs] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	// added response for refresh from url
	const [responseData, setResponseData] = useState(null);
	const targetDivRef = useRef(null);

	const scrollToDiv = () => {
		if (targetDivRef.current) {
			targetDivRef.current.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};
	const handleCardClick = (job) => {
		setSelectedCard(job);
		// Wait for the next render cycle to ensure the ref is updated
		setTimeout(() => {
			scrollToDiv();
		}, 0);

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

	// get jobs from the server
	useEffect(() => {
		fetch("/api/jobs-db")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setJobListings(body.data);
				console.log(body);
				console.log(body.data);
				//console.log(body.data.jobs);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [responseData]);

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
				({ job_title, company_name, job_description }) =>
					job_title.toLowerCase().includes(searchVal.toLowerCase()) ||
					company_name.toLowerCase().includes(searchVal.toLowerCase()) ||
					job_description.toLowerCase().includes(searchVal.toLowerCase())
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

	const handleRefresh = async () => {
		try {
			const response = await axios.get("/api/refresh-db");
			console.log(response);
			console.log(response.data.message);
			setResponseData(response.data.message);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
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
				<h2>press to refresh db</h2>
				<button className="secondary-button" onClick={handleRefresh}>
					Admin refresh
				</button>
				{responseData && (
					<div>
						<h2>Data from API:</h2>
						<p>{responseData}</p>
					</div>
				)}
			</section>
			<section className="section scroll-wind">
				<h1 className="message" data-qa="message">
					{`FILTERED ${message}`}
				</h1>
				<div className="scrollable-content">
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
				</div>
			</section>
			<section className="section">
				<h1 className="message" data-qa="message">
					{selectedCard?.job_title ?? "choose a job"}
				</h1>
				{selectedCard ? (
					<CardBigOne
						key={selectedCard.id}
						data={selectedCard}
						ref={targetDivRef}
					/>
				) : (
					<p>No job listings selected.</p>
				)}
			</section>
		</div>
	);
}

export default SearchDb;
