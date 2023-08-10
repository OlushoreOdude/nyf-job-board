const priorityObj = {
	jobId: ["job_id"],
	jobTitle: ["job_title"],
	employmentType: ["job_employment_type"],
	location: {
		city: ["job_city"],
		state: ["job_state"],
		country: ["job_country"],
	},
	salary: {
		min: ["job_min_salary"],
		max: ["job_max_salary"],
		currency: ["job_salary_currency"],
		period: ["job_salary_period"],
	},
	jobDescription: ["job_description"],
	requiredExperience: ["job_required_experience"],
	requiredSkills: ["job_required_skills"],
	requiredEducation: ["job_required_education"],
	experienceInPlaceOfEducation: ["job_experience_in_place_of_education"],
	company: {
		name: ["employer_name"],
		logo: ["employer_logo"],
		website: ["employer_website"],
		companyType: ["employer_company_type"],
	},
	application: {
		applyLink: ["job_apply_link"],
		isDirect: ["job_apply_is_direct"],
		qualityScore: ["job_apply_quality_score"],
	},
	isRemote: ["job_is_remote"],
	postedDate: ["job_posted_at_datetime_utc"],
	benefits: ["job_benefits"],
	highlights: ["job_highlights"],
	postingLanguage: ["job_posting_language"],
	industry: ["job_onet_soc"],
	jobZone: ["job_onet_job_zone"],
};

export { priorityObj };