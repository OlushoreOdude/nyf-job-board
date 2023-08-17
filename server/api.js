import { Router } from "express";

import dataJobs from "./utils/SampleData/transformRes_Arbeitnow.json";

import routeHanlders from "./utils/routeHandlers";
const { refreshDbWithAllApi, selectAllDbDataRH } = routeHanlders;

const router = Router();


router.get("/", (_, res) => {
	res.json({ message: "JOBS BOARD" });
});

router.get("/jobs", async (_, res) => {
  try {
      res.json({ data : dataJobs });
  } catch (error) {
    // console.log(error);
    res.status(500).json({ error: "Failed to fetch jobs data from external API" });
  }

});
// route calls jobs form db
router.get("/jobs-db", selectAllDbDataRH);

// route refreshes jobs on db
router.get("/refresh-db", refreshDbWithAllApi);


router.get("/jobs-Arbeit", async (req, res) => {
	//console.log(req.query, "this is query object");
	//query object always returns a strig that need to be converted to the required data type. (type conversions)

	const isRemote = req.query.is_remote === "true";
	const location = req.query.location;
	const title = req.query.title;
	//console.log(dataJobs.dataT, "data jobs");
	// exact match is not user friendly
	//.includes() checks for partial matches
	const output = dataJobs.dataT.filter((job) => {
		return (
			job.is_remote === isRemote ||
			job.registered_office.includes(location) || // Check for partial location match
			job.job_title.includes(title) // Check for partial title match
		);
	});

	console.log(output.length, "output");
	//const newOutput = {
	//  company_name: output.job_company_name,location: output.registered_office,title:output.job_title,
	//};
	res.json({ data: output });
});

export default router;

