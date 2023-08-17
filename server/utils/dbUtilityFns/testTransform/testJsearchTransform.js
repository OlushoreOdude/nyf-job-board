import utili_Fns from "./utili_Fns";
const { convertToTimestamp } = utili_Fns;

export const testJsearchTransform = (dataArr) => {
	return dataArr.map((job) => {
		let newObj = {
			job_id: job.job_id,
			company_name: job.employer_name,
			job_title: job.job_title,
			job_description: job.job_description,
			is_remote: job.job_is_remote,
			registered_office: job.job_city,
			posted_date: convertToTimestamp(job.job_posted_at_timestamp),
			job_url: job.url,
		};
		return newObj;
	});
};
