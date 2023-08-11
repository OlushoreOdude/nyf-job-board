require("dotenv").config(); // Load environment variables from .env file
import axios from "axios";
import { Pool } from "pg";

// Configure the database connection using values from .env file
const pool = new Pool({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	port: 5432, // Default PostgreSQL port
});

// Function to fetch data from Arbeit API
async function fetchArbeitData() {
  try {
    const response = await axios.get("https://www.arbeitnow.com/api/job-board-api");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data from Arbeit API:", error);
    throw error;
  }
}

// Function to insert a single job record into the 'job' table
async function insertSingleJobIntoDB(job) {
  try {
    const {
      title,
      company_name,
      hired_from_cyf,
      location,
      work_arrangement,
      work_experience,
      description,
      deadline_date,
      url,
      salary,
    } = job;

    const query = `
      INSERT INTO job (
        job_title,
        company_name,
        hired_from_cyf,
        job_location,
        work_arrangement,
        work_experience,
        description,
        deadline_date,
        url,
        salary
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`;

    const values = [
      title,
      company_name,
      hired_from_cyf,
      location,
      work_arrangement,
      work_experience,
      description,
      new Date(deadline_date * 1000), // Convert UNIX timestamp to Date
      url,
      salary,
    ];

    await pool.query(query, values);
    console.log("Data inserted into the 'job' table.");
  } catch (error) {
    console.error("Error inserting data into the 'job' table:", error);
    throw error;
  }
}

// Function to display all data in the 'job' table
async function displayAllDataInDB() {
  try {
    const query = "SELECT * FROM job";
    const result = await pool.query(query);
    const rows = result.rows;
    console.log("All data in the 'job' table:");
    console.table(rows);
  } catch (error) {
    console.error("Error displaying data:", error);
    throw error;
  }
}

// Main function to fetch data, insert a single job, and display all data
async function fetchDataInsertAndDisplay() {
  try {
    const jobs = await fetchArbeitData();
    const firstJob = jobs[0]; // Select the first job from the fetched data
    await insertSingleJobIntoDB(firstJob);
    await displayAllDataInDB();
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Remember to release the database connection pool when done
    await pool.end();
  }
}

// Call the main function to fetch data, insert a single job, and display all data
fetchDataInsertAndDisplay();
