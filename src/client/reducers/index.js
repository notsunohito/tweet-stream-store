import _ from 'lodash';
import { combineReducers } from 'redux';

import { SHOW_PAGE, ADD_HELLO_WORLD } from '../constants/ActionTypes';

const initialState = {
    pageName: 'top',
    greetings: []
};


export function index(state= initialState, action) {
    switch(action.type) {
    case SHOW_PAGE:
        return _.assign({}, state, { pageName: action.pageName });
    case ADD_HELLO_WORLD:
        return _.assign({}, state, { greetings: state.greetings.concat(action.greeting) });
    default:
        return state;
    }
}


const rootReducer = combineReducers({
    index
});

export default rootReducer;
