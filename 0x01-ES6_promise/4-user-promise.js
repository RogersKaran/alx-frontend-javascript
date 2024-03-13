export default function signUpUser(firstName, lastName) {
    promise = new Promise((resolve, reject) => {
        const user = {
	    firstName: firstName,
	    lastName: lastName
	};
	resolve(user);
    });

    return promise;
}

