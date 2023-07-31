import { useEffect, useState } from "react";

import "./home3.css";
import Card from "../components/Card.jsx";
import CardButtonShowJob from "../components/CardButtonShowJob.jsx";
import CardBigOne from "../components/CardBigOne.jsx";

export function HomeCopy2() {
	const [message, setMessage] = useState("Loading...");
	const [jobListings, setJobListings] = useState([]);
	const [selectedCard, setSelectedCard] = useState(null);

	const handleCardClick = (job) => {
		setSelectedCard(job);
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
		fetch("/api/jobs")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setJobListings(body.data.jobs);
				console.log(body);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<div className="container">
			<section className="section">
				<h1 className="message" data-qa="message">
					{`SEARCH  ${message} `}
				</h1>
				{jobListings.length > 0 ? (
					jobListings.map((job, index) => <Card key={index} data={job} />)
				) : (
					<p>No job listings found.</p>
				)}
			</section>
			<section className="section">
				<h1 className="message" data-qa="message">
					{`FILTERED ${message}`}
				</h1>
				{jobListings.length > 0 ? (
					jobListings.map((job, index) => (
						<CardButtonShowJob
							key={index}
							data={job}
							onClick={() => handleCardClick(job)}
						/>
					))
				) : (
					<p>No job listings found.</p>
				)}
			</section>
			<section className="section ter">
				<h1 className="message" data-qa="message">
					{selectedCard?.job_title ?? "choose a job"}
				</h1>
				{selectedCard ? (
					<CardBigOne key={selectedCard.id} data={selectedCard} />
				) : (
					<p>No job listings selected.</p>
				)}
			</section>
		</div>
	);
}

export default HomeCopy2;
