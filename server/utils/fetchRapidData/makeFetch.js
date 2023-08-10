import axios from "axios";


export const makeRapidFetch = async (options) => {
	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		// Handle the error here
		console.error("An error occurred:", error);
		//throw error again to propagate it to the caller
		throw error;
	}
};