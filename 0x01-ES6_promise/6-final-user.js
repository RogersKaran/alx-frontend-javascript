import signUpUser from "./4-user-promiser";
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
    const promises = [
        signUpUser(firstName, lastName),
	uploadPhoto(fileName)
    ];

    const results = await Promise.allSettled(promises);

    const array = result.map(result => {
        status: result.staus,
	value: result.status === 'fulfilled' ? result.value : result.reason
    });

    return array;
}

