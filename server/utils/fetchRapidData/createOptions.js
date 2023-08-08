export const createOptions = (routQuery, apiKey) => {
	const options = {
		method: routQuery.method.toUpperCase(), // Convert method to uppercase
		url: "https://jsearch.p.rapidapi.com/search",
		params: {
			query: routQuery.query,
			page: routQuery.page.toString(),
			num_pages: routQuery.num_pages.toString(),
		},
		headers: {
			"X-RapidAPI-Key": apiKey,
			"X-RapidAPI-Host": "jsearch.p.rapidapi.com",
		},
	};

	return options;
};
