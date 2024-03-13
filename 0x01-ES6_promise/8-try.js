export default function(numerator, denominator) {
    if (denominator == 0) {
    	return new Error("Cannot divide by 0");
    } else {
        return ( numerator / denominator);
    }
}

