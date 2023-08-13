import axios from "axios";

// Function to fetch data from Arbeit API
// Function tested locally and ready to export to individual file
export async function fetchArbeitData() {
	try {
		const response = await axios.get(
			"https://www.arbeitnow.com/api/job-board-api"
		);
		console.log(response);
		return response.data.data;
	} catch (error) {
		console.error("Error fetching data from Arbeit API:", error);
		throw error;
	}
}

