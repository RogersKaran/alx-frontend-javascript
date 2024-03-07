function getCurrentYear() {
	const date = new Date();
	return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
	const year = getCurrentYear();
	console.log("Current Year: ", year);
	const budget = {
		[`income-${year}`]: income,
		[`gdp-${year}`]: gdp,
		[`capita-${year}`]: capita
	};
	
	return budget;
}
