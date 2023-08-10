import { normaliseOne, processProperty } from "./nomaliseOneJobObj";

/**
 * Transform an array of job objects by normalizing each object's properties.
 *
 * @param {Object} priorityAttributes - Priority attributes mapping.
 * @param {Array} jobArray - Array of job objects to be transformed.
 * @param {Function} processPropertyFn - Function to process properties during normalization.
 * @returns {Array} - Transformed array of normalized job objects.
 */

// Normalize each job object in the array
const transformData = (
	priorityAttributes,
	jobArray,
  processPropertyFn
) => {
	console.log("got here");
	//console.log(jobArray);
	return jobArray.map((jobObject) => {
		return normaliseOne(priorityAttributes, jobObject, processPropertyFn);
	});
};
export default { transformData, processProperty };