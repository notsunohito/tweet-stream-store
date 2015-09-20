import _ from 'lodash';
import { combineReducers } from 'redux';

import { SHOW_PAGE, ADD_HELLO_WORLD, ADD_TWEET, CHANGE_TRACKING } from '../constants/ActionTypes';

const initialState = {
    pageName: 'top',
    greetings: [],
    tweets: [],
    tracking: ''
};


export function index(state= initialState, action) {
    switch(action.type) {
    case SHOW_PAGE:
        return _.assign({}, state, { pageName: action.pageName });
    case ADD_HELLO_WORLD:
        return _.assign({}, state, { greetings: state.greetings.concat(action.greeting) });
    case ADD_TWEET:
        const tweets = [action.tweet].concat(state.tweets);
        const limit = Math.min(tweets.length, 10);
        return _.assign({}, state, { tweets:  _.take(tweets, limit)});
    case CHANGE_TRACKING:
        return _.assign({}, state, {tracking: action.tracking});
    default:
        return state;
    }
}


const rootReducer = combineReducers({
    index
});

export default rootReducer;
