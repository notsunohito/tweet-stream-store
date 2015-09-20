import * as types from '../constants/ActionTypes';
import API from '../api/index';


export function showPage(pageName) {
    return {
        type: types.SHOW_PAGE,
        pageName: pageName
    };
}

export function fetchHelloWorld() {
    return dispatch => {
        API.fetchHelloWorld().then((res)=> {
            dispatch(addHelloWorld(res.greeting));
        });
    };
}

export function addHelloWorld(greeting) {
    return {
        type: types.ADD_HELLO_WORLD,
        greeting: greeting
    };
}

export function addTweet(tweet) {
    return {
        type: types.ADD_TWEET,
        tweet: tweet
    };
}
