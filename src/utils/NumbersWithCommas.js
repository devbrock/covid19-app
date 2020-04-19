export const numberWithCommas = (x) => {
	// return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
	if (x === null) {
		return x;
	} else {
		return x.toLocaleString();
	}
};
