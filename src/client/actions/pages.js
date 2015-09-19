import * as types from '../constants/ActionTypes';


export function showPage(pageName) {
    return {
        type: types.SHOW_PAGE,
        pageName: pageName
    };
}
