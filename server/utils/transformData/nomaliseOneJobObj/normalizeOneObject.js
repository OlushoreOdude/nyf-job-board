import normalizeJobObject from "./nomalizeOneJobObject";


/**
 * Normalize a single job object.
 * @param {Object} priorityAtr - Priority attributes mapping.
 * @param {Object} originObj - Original job object.
 * @param {Function} processPropertyFn - Function to process properties.
 * @returns {Object} - Normalized job object.
 */
const normaliseOne = (priorityAtr, originObj, processPropertyFn) => {
	return normalizeJobObject(priorityAtr, originObj, processPropertyFn);
};

export default normaliseOne;