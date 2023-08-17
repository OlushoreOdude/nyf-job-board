
import "./Card.css";

const CardButtonShowJob = ({ data, onClick }) => {
	return (
		<div className="card">
			<h1 className="h1">{data.company_name}</h1>
			<h2>{data.job_title}</h2>
			<div>
				<h2 style={{ display: "inline-block", marginRight: "10px" }}>
					{data.is_remote ? "work from home" : "office based"}
				</h2>
				<button className="button" onClick={() => onClick(data)}>
					more info
				</button>
			</div>
		</div>
	);
};

export default CardButtonShowJob;
