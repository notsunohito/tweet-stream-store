import { Request } from './request';

export function fetchHelloWorld() {
    return Request
        .get('/world')
        .end();
}

export function openTweetStore(payload) {
    return Request
        .post('/tweetStore/open')
        .send(payload)
        .end();
}

export function closeTweetStore() {
    return Request
        .post('/tweetStore/close')
        .end();
}


const API = {
    fetchHelloWorld,
    openTweetStore,
    closeTweetStore
};

export default API;
