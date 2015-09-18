import { combineReducers } from 'redux';
import pages from './pages';
import tops from './tops';

const rootReducer = combineReducers({
    pages,
    tops
});

export default rootReducer;
