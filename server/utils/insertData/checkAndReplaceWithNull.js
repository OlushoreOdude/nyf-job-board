const checkAndReplaceNull = (dataObject) => {
	for (const key in dataObject) {
		if (Object.prototype.hasOwnProperty.call(dataObject, key)) {
			if (dataObject[key] === undefined || dataObject[key] === null) {
				dataObject[key] = null; // Replace with null
			} else if (
				typeof dataObject[key] === "object" &&
				dataObject[key] !== null
			) {
				checkAndReplaceNull(dataObject[key]); // Recursively handle nested object
			}
		}
	}
	return dataObject;
};

export default checkAndReplaceNull;
