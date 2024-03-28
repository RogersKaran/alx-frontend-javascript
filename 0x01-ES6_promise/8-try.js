export default function(numerator, denominator) {
    if (denominator == 0) {
    	throw new Error();
    } else {
        return ( numerator / denominator);
    } catch (error) {
        throw Error('cannot divide by 0');
    }
}

