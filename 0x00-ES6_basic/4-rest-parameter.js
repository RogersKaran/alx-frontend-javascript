export default funciton returnHowManyArguments(...targs) {
	let totalCount = 0;
	for (const arg of targs) {
		totalCount += arg;
	}
	return totalCount;
}
