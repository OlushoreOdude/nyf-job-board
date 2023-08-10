import fetchRapidData from "../fetchRapidData";
import transformDataModule from "../transformData";
const { transformData , processProperty } = transformDataModule;
import insertJobData from "../insertData";
import prioritySchema from "../priorityObjectSchema";


export const myRouteHandler = async (req, res) => {
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
			// call fetchRapidData to get the api data
			const responseData = await fetchRapidData(routeObj);

			if (responseData.error) {
				//console.log(responseData);
				//responseData.error = "two";
				// Handle the error from fetchRapidData
				//console.error("Error fetching rapid data:", responseData.error);
				res.status(500).json({ error: responseData.error });
				return;
			}
			const data = responseData;

			const transformedData = transformData(
				prioritySchema,
				data,
				processProperty
			);

			//call inserted data
			insertJobData(transformedData)
				.then(() => {
					transformedData.message = "Data inserted successfully"; // Add success message
				})
				.catch((err) => {
					transformedData.message = `Error inserting data ${err}`; // Add error message
				})
				.finally(() => {
					// Send the transformed data as a response
					res.json(transformedData);
				});
		} catch (error) {
			res.status(500).json({ error: "An error occurred in router handler ", errorMessage: error });
		}
	};
