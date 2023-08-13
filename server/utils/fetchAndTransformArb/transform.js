// Make transform Function
// Function tested locally and ready to export to individual file
export async function transform(data) {
	return data.map((job) => {
		const newObj = {
			job_id: job.slug,
			job_company_name: job.company_name,
			job_title: job.title,
			job_description: job.description,
			is_remote: job.remote,
			job_url: job.url,
			posted_date: job.created_at,
			registered_office: job.location,
			hired_from_cyf: false,
		};
		return newObj;
	});
}
