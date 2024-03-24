import { uploadPHoto, createUser } from './utils.js';

export default function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])
	.then(([photoResponse, userResponse]) => {
	    console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
	})
	.catch(error => {
	    console.log('Signup system offline');
	});
}

