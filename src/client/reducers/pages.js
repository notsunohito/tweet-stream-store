import { SHOW_PAGE } from '../constants/ActionTypes';

const initialState = {
    pageName: 'top'
};


export default function pages(state= initialState, action) {
    switch(action.type) {
    case SHOW_PAGE:
        return { pageName: action.pageName };
    default:
        return state;
    }
}
