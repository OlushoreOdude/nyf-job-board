import utili_Fns from "./utili_Fns";
const { truncateString, convertToTimestamp } = utili_Fns;

export const testArbitNowTransform = (dataArr) => {
	return dataArr.map((job) => {
		let newObj = {
			job_id: truncateString(job.slug),
			company_name: job.company_name,
			job_title: job.title,
			job_description: job.description,
			is_remote: job.remote,
			registered_office: job.location,
			posted_date: convertToTimestamp(job.created_at),
			job_url: job.url,
		};
		return newObj;
	});
};
