//brake file inot smaller file of funcions

import axios from "axios";
import "dotenv/config";
export const rapidKey = createApikey();

function createApikey() {
	if (process.env.API_KEY_RAPID) {
		return process.env.API_KEY_RAPID;
	}
}
export const createOptions = (method, query, page, num_pages, apiKey) => {
	const options = {
		method: method.toUpperCase(), // Convert method to uppercase
		url: "https://jsearch.p.rapidapi.com/search",
		params: {
			query: query,
			page: page.toString(),
			num_pages: num_pages.toString(),
		},
		headers: {
			"X-RapidAPI-Key": apiKey,
			"X-RapidAPI-Host": "jsearch.p.rapidapi.com",
		},
	};

	return options;
};

export const fetchRapidData = async (options) => {
	return axios.request(options).then((response) => response.data);
	//error with try catch
};
