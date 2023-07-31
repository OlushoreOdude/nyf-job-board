import { useNavigate } from "react-router-dom";
import { handleClickHistory } from "../utils/handleClick_jobId";
import "./card.css";

const CardButtonShowJob = ({ data, onClick }) => {
	const history = useNavigate();

	const handleClick = () => {
		handleClickHistory(data.job_id, history);
	};
	return (
		<div className="card">
			<h2>{data.job_title}</h2>
			<p>{data.description}</p>
			<button className="button" onClick={handleClick}>
				all details
			</button>
			<button className="button" onClick={() => onClick(data)}>
				more info
			</button>
		</div>
	);
};

export default CardButtonShowJob;
