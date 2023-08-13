import fetchAndTransformArb from "../fetchAndTransformArb";
const { fetchArbeitData, transform  } = fetchAndTransformArb;


export const arbeitNowRoute = async (_, res) => {
	const testJobData = await fetchArbeitData();
	const transformed = await transform(testJobData);
	res.json({ data: testJobData, dataT: transformed });
};
