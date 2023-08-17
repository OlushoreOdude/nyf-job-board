export const createJsearchOptions = (routQuery) => {
	const options = {
		method: routQuery.method.toUpperCase(),
		params: {
			query: routQuery.query,
			page: routQuery.page.toString(),
			num_pages: routQuery.num_pages.toString(),
		},
	};

	return options;
};
