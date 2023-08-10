import extractAllData from "./extractAllData";
import checkAndReplaceNull from "./checkAndReplaceWithNull";
import db from "./dbConnect";

async function insertJobData(jobDataArray) {
	const client = await db.pool.connect();

	//console.log(jobDataArray, "jobs data arrya");

	try {
		// Start a transaction
		await client.query("BEGIN");

		for (const jobData of jobDataArray) {
			const originalData = extractAllData(jobData);
			//const extractedData = extractAllData(jobData);
			const extractedData = checkAndReplaceNull(originalData);

			// Insert data into JobInfo table
			await client.query(
				`INSERT INTO Job_listing (jobId, jobTitle, employmentType, postedDate, postingLanguage, jobZone, industry)
                 VALUES ($1, $2, $3, $4, $5, $6, $7)`,
				[
					extractedData.jobId,
					extractedData.jobTitle,
					extractedData.employmentType,
					extractedData.postedDate,
					extractedData.postingLanguage,
					extractedData.jobZone,
					extractedData.industry,
				]
			);

		}

		// Commit the transaction
		await client.query("COMMIT");
	} catch (err) {
		// If there's an error, roll back the transaction
		await client.query("ROLLBACK");
		throw err;
	} finally {
		// Release the client back to the pool
		client.release();
	}
}

export default insertJobData;
