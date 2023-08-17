export const truncateString = (inputString) => {
	if (inputString.length <= 100) {
		return inputString;
	} else {
		return inputString.slice(0, 97) + "...";
	}
};
