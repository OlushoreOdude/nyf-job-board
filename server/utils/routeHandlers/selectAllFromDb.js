
import db from "../../db";

const { pool } = db;

export const selectAllDbDataRH = async (req, res) => {
	let client;

  try {
    console.log("testing..",process.env.DATABASE_URL);
    client = await pool.connect();
    const result = await client.query("SELECT * FROM testjob_list");
    const jobs = result.rows;

    res.json({ data: jobs });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    if (client) {
      client.release();
    }
  }
};
