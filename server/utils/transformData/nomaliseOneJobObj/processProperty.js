/**
 * Process a property based on its type and specified limits.
 *
 * @param {any} input - Input property to be processed.
 * @param {number} maxWords - Maximum number of words (for strings) .
 * @param {number} maxArrayItems - Maximum number of items (for arrays and objects).
 * @returns {any} - Processed property.
 */

function processProperty(input, maxWords, maxArrayItems) {
	if (typeof input === "string") {
		// Handle new line characters and concatenate symbols
		const cleanedInput = input.replace(/\n+/g, " ").replace(/\+$/, "");
		const words = cleanedInput.split(" ");
		return words.slice(0, maxWords).join(" ");
	} else if (Array.isArray(input)) {
		return input.slice(0, maxArrayItems);
	} else if (input !== null && typeof input === "object") {
		return Object.keys(input).reduce((result, key) => {
			result[key] = processProperty(input[key], maxWords, maxArrayItems);
			return result;
		}, {});
	} else {
		return input;
	}
}

export default processProperty;
