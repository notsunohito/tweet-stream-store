import _ from 'lodash';
import { ADD_HELLO_WORLD } from '../constants/ActionTypes';


const initialState = {
    greetings: []
};


export default function tops(state= initialState, action) {
    switch(action.type) {
    case ADD_HELLO_WORLD:
        return _.assign({}, state, { greetings: state.greetings.concat(action.greeting) });
    default:
        return state;
    }
}
