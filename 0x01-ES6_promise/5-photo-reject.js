export default uploadPhoto(fileName) {
    promise = new Promise((resolve, reject) => {
    reject(new Error(`${fileName} cannot be processed`));
    });

    return promise;
}

