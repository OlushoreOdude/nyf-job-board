import { Router } from "express";
import axios from "axios";

// import data from data.json at root.
import jobsData from "../data.json";
import myRouteHandler from "./utils/refreshData";
const router = Router();

router.get("/", (_, res) => {
	res.json({ message: "JOBS BOARD" });
});

// Route to fetch jobs data from the external API

router.get("/jobs", async (_, res) => {
  try {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://www.arbeitnow.com/api/job-board-api",
      headers: {},
    };

    const response = await axios(config);
    res.json(response.data);
  } catch (error) {
    // console.log(error);
    res.status(500).json({ error: "Failed to fetch jobs data from external API" });
  }
});


// route for jobsData
router.get("/jobs-test", (_, res) => {
  res.json({ data: jobsData });
});

// route for refresh jobs
router.get("/jobs-refresh-test", myRouteHandler);
export default router;

