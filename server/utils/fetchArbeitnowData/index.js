import axios from "axios";

const fetchArbeitnowData = async () => {
	try {
		const config = {
			method: "get",
			maxBodyLength: Infinity,
			url: "https://www.arbeitnow.com/api/job-board-api",
			headers: {},
		};

		const response = await axios(config);
		return response.data;
	} catch (error) {
		//console.error(error); // Log the error for debugging purposes
		throw new Error("Failed to fetch data from external API");
	}
};

export default fetchArbeitnowData;
