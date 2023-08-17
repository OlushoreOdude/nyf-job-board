
import Nyf_ApiClient from "../fetchAny";
import dbUtiltyFns from "../dbUtilityFns";
const { testArbitNowTransform,
		testJsearchTransform,
		insertTranfomedJobsArr } = dbUtiltyFns;

const apiClient = new Nyf_ApiClient();

export const refreshDbWithAllApi = async (req, res) => {
	const method = "GET";
	const query = req.query.query || "Java developer in Texas, USA";
	const page = req.query.page || 1;
	const num_pages = req.query.num_pages || 1;

	const routeObj = {
		method,
		query,
		page,
		num_pages,
	};
	try {
		// call construnctor function to get the data from the api's

		const jsearchResponse = await apiClient.searchJSearchAPI(routeObj);
		const arbeitNowResponse = await apiClient.searchArbeitNowAPI(routeObj);

		if (!jsearchResponse && !arbeitNowResponse) {
			res.status(500).json({ error: "failed to fetch" });
			return;
		}


		const data_j = jsearchResponse;
		const data_arb = arbeitNowResponse;

		const data_j_tranformed = testJsearchTransform(data_j);
		const data_arb_tranformed = testArbitNowTransform(data_arb);

		const combinedResponse = [
			...data_j_tranformed,
			...data_arb_tranformed,
    ];

    const is_success = await insertTranfomedJobsArr(combinedResponse);
console.log(is_success, "this is success");
    if(is_success.message){
      res.json({ message: is_success.message, data: combinedResponse });
    }
    if(is_success.error){
      res.json({ error: is_success.error });
    }
	} catch (error) {
		res.status(500).json({
			error: "An error occurred in router handler ",
			errorMessage: error,
		});
	}
};
