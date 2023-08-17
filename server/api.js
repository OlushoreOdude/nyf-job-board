import { Router } from "express";

import dataJobs from "./utils/SampleData/transformRes_Arbeitnow.json";

// import data from data.json at root.
import jobsData from "../data.json";
import myRouteHandler from "./utils/refreshData";
const router = Router();
import arbeitNowRouteRH from "./utils/arbeitNowRoute";
const { arbeitNowRoute } = arbeitNowRouteRH;

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

router.get("/jobs-Arbeit", async(req,res) =>{
  const isRemote = req.query.is_remote;
  const location = req.query.location;
  const title =req.query.title;
  const output = dataJobs.dataT.filter((job) =>{
    return(
      job.is_remote == isRemote || job.registered_office == location || job.job_title == title
    );
  });
    //const newOutput = {
      //  company_name: output.job_company_name,location: output.registered_office,title:output.job_title,
    //};
  res.json({ data: output });
});


// route for jobsData
router.get("/jobs-test", (_, res) => {
  res.json({ data: jobsData });
});

// route for Arbeitnow data
router.get("/arbeitnow-test", arbeitNowRoute);

// route for refresh jobs
router.get("/jobs-refresh-test", myRouteHandler);
export default router;

