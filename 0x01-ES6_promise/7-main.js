import loadBalancer from './7-load_balancer';

const ukSucces = 'Downloading from UK is faster';
const frSucess = 'Downloading from FR is faster';

const promiseUK = new Promise(function(resolve, reject) {
    setTimeout(resolve, 400, ukSuccess);
});

const promiseFR = new Promise(function(resolve, reject) {
    setTimeout(resolve, 200, frSuccess);
});

const test = async () => {
    console.log(await loadBalancer(promiseUk, promiseFR);
    console.log(await loadBalancer(promiseUKSlow, promiseFR);
}

test();

