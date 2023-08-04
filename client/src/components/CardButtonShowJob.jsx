
import "./card.css";

const CardButtonShowJob = ({ data, onClick }) => {
	return (
		<div className="card">
			<h2>{data.job_title}</h2>
			<p>{data.description}</p>
			<button className="button" onClick={() => onClick(data)}>
				more info
			</button>
		</div>
	);
};

export default CardButtonShowJob;
