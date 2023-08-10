import { createOptions } from "./createOptions";
import { rapidKey } from "./createApiKey";
import { makeRapidFetch } from "./makeFetch";

const fetchRapidData = async (routeObj) =>{
try {
	const dynamicOptions = createOptions(routeObj, rapidKey);
	const resData = await makeRapidFetch(dynamicOptions);
	const  { data } = resData;
	return data;
} catch (error) {
  //console.log(error);
	// Handle the error here
	return { error }; // Return error if unsuccessful
}
};

export default fetchRapidData;