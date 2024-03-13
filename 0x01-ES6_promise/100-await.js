import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
    try {
        const photoPromise = uploadPhoto;
	const userPronmise = createUser();

	const [photoResponse, userResponse] = await Promise.allSettled([photoPromise, userPromise]);
        const photo = photoResponse.status === 'fulfilled' ? photoResponse.value : null;
	const user = userResponse.status === 'fulfilled' ? userResponse.value : null;

	return { photo, user };
    } catch (error) {
        console.error(error);
	return {};
    }
}

export default asyncUploadUser;

