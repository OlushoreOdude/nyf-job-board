import "./card.css";

const Card = ({ data }) => {
	return (
		<div className="card">
			<h2>{data.job_title}</h2>
			<p>{data.description}</p>
		</div>
	);
};

export default Card;
