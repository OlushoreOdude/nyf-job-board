export const handleClickHistory = (jobId, historyfunc) => {
	// Navigate to the job detail page using the job's ID
	// updated to useNavigate
	historyfunc(`/jobs/${jobId}`);
};
