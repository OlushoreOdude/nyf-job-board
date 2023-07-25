import { Router } from "express";

import logger from "./utils/logger";

/*
// route to test locally
import jobsData from "./sampleData/sampleData.json"; */

// import data from data.json at root.
import jobsData from "../data.json";
const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello-team+Sana, world23!" });
});

// route for jobsData
router.get("/jobs", (_, res) => {
  res.json({ data: jobsData });
});
export default router;
