import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/", (_, res) => {
	res.json({ message: "JOBS BOARD" });
});

// Route to fetch jobs data from the RapidAPI endpoint
router.get("/jobs", async (_, res) => {
	try {
		const options = {
			method: "GET",
			url: "https://jsearch.p.rapidapi.com/search",
			params: {
				query: "Developer", // Search input will go here
				page: "1",
				num_pages: "1",
			},
			headers: {
				"X-RapidAPI-Key": "98c192b09cmsh2ef6fb35df87591p1863acjsn62cf9efead06",
				"X-RapidAPI-Host": "jsearch.p.rapidapi.com",
			},
		};

		const response = await axios.request(options);
		const jobsData = response.data.data.slice(0, 10).map((job) => ({
			title: job.job_title,
			location: `${ job.job_city }, ${ job.job_state }, ${ job.job_country }`,
			// Only shows the first 10 jobs, only shows title and location.
			//Search filter options.
		}));

		res.json({ data: jobsData });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to fetch jobs data" });
	}
});

export default router;
