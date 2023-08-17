import React, { forwardRef } from "react";
import "./CardBigOne.css";

const CardBigOne = forwardRef(({ data }, ref) => {
	const formattedDate = new Date(data.posted_date).toLocaleDateString();

	return (
		<div ref={ref} className="card bigone">
			<h1>{data.company_name}</h1>
			<h2>{data.job_title}</h2>
			<p className="limit-text">{data.job_description}</p>
			<h2>{data.is_remote ? "work from home" : "office based"}</h2>
			<p>{data.registered_office}</p>
			<p>{formattedDate}</p>
			<a href={data.job_url} target="_blank" rel="noopener noreferrer">
				Job Details
			</a>
		</div>
	);
});

CardBigOne.displayName = "CardBigOne"; // Provide a display name
export default CardBigOne;
