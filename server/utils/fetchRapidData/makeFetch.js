import axios from "axios";


export const makeRapidFetch = async (options) => {
	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		// Handle the error here
		const errorMessage = "An error occurred in make fetch";
		// Return an error object with the error message and original error
		//console.log(error, "this is an error");
		return { error: errorMessage, originalError: error };
	}
};