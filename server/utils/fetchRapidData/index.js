import { createOptions } from "./createOptions";
import { rapidKey } from "./createApiKey";
import { makeRapidFetch } from "./makeFetch";

const fetchRapidData = async (routeObj) =>{

 const dynamicOptions = createOptions(routeObj, rapidKey);
const resData = await makeRapidFetch(dynamicOptions);
const { data } = resData;
return data;
};

export default fetchRapidData;