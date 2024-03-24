import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
    try {
        const photoPromise = await uploadPhoto();
	const userPronmise = await createUser();

	return { photo, user };
    } catch (error) {
	return { photo: null, user: null};
    }
};

export default asyncUploadUser;

