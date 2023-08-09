const extractAllData = (jsonData, prefix = "") => {
	const extractedData = {};

	for (const key in jsonData) {
		if (typeof jsonData[key] === "object" && jsonData[key] !== null) {
			const nestedPrefix = prefix ? `${prefix}_${key}` : key;
			Object.assign(extractedData, extractAllData(jsonData[key], nestedPrefix));
		} else {
			const propertyKey = prefix ? `${prefix}_${key}` : key;
			extractedData[propertyKey] = jsonData[key];
		}
	}

	return extractedData;
};

export default extractAllData;
