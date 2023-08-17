import db from "./dbConnect";
const { pool } = db;



 export const insertTranfomedJobsArr = async (jobDataArr) => {
   const jobDataArray = jobDataArr;
   let client;

		try {
			client = await pool.connect();
			// Start a transaction
			await client.query("BEGIN");

			for (const jobData of jobDataArray) {
				const extractedData = jobData;

				// Insert data into testjob_list table
				await client.query(
					`INSERT INTO testjob_list (job_id, company_name, job_title, job_description, is_remote, registered_office, posted_date, job_url)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
					[
						extractedData.job_id,
						extractedData.company_name,
						extractedData.job_title,
						extractedData.job_description,
						extractedData.is_remote,
						extractedData.registered_office,
						extractedData.posted_date,
						extractedData.job_url,
					]
				);
			}

			// Commit the transaction
			await client.query("COMMIT");
			return { message: "Successfully updated the database" };
		} catch (err) {
			// If there's an error, roll back the transaction
			if (client) {
				await client.query("ROLLBACK");
				console.error("Error:", err);
				return { error: "Internal Server Error" };
			}
		} finally {
			// Release the client back to the pool
			if (client) {
				client.release();
			}
		}
 };

