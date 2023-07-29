import "./card.css";

const CardBigOne = ({ data }) => {
	return (
		<div className="card bigone">
			<h2>{data.job_title}</h2>
			<p>{data.description}</p>
			<p>{data.location}</p>
		</div>
	);
};

export default CardBigOne;
