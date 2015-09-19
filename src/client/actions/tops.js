import * as types from '../constants/ActionTypes';
import API from '../api/index';


export function fetchHelloWorld() {
    return dispatch => {
        API.fetchHelloWorld().then((res)=> {
            dispatch(addHelloWorld(res));
        });
    };
}

export function addHelloWorld(res) {
    return {
        type: types.ADD_HELLO_WORLD,
        greeting: res.greeting
    };
}
