
/**
 * Normalize a job object based on priority attributes and process properties.
 *
 * @param {Object} jobPriorityAttributes - Mapping of priority attributes.
 * @param {Object} originalObject - Original job object to be normalized.
 * @param {Function} processPropertyFn - Function to process properties (optional).
 * @param {number} maxWords - Maximum number of words in processed properties (default: 20).
 * @param {number} maxArrayItems - Maximum number of array items in processed properties (default: 2).
 * @returns {Object} - Normalized job object.
 */

function normalizeJobObject(
	jobPriorityAttributes,
	originalObject,
	processPropertyFn,
	maxWords = 20,
	maxArrayItems = 2
) {
	const normalizedObject = {};

	for (const [priorityKey, originalKey] of Object.entries(
		jobPriorityAttributes
	)) {
		if (typeof originalKey === "string" && originalKey in originalObject) {
			const value = originalObject[originalKey];
			const processedValue = processPropertyFn
				? processPropertyFn(value, maxWords, maxArrayItems)
				: value;
			normalizedObject[priorityKey] =
				processedValue !== undefined ? processedValue : value;
		} else if (typeof originalKey === "object") {
			normalizedObject[priorityKey] = {};
			for (const [subPriorityKey, subOriginalKey] of Object.entries(
				originalKey
			)) {
				if (subOriginalKey in originalObject) {
					const value = originalObject[subOriginalKey];
					const processedValue = processPropertyFn
						? processPropertyFn(value, maxWords, maxArrayItems)
						: value;
					normalizedObject[priorityKey][subPriorityKey] =
						processedValue !== undefined ? processedValue : value;
				}
			}
		}
	}

	return normalizedObject;
}

export default normalizeJobObject;