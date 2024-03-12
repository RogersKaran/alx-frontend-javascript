export default function handleResponseFormatFromAPI(promise) {
    promise
	.then(response => {
	    console.log('Got a response from the API');
		return { status: 200, body: 'Success' };
	})
	.catch(error => {
	    console.error(error);
		return new Error();
	});
}

