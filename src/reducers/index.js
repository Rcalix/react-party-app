import {combineReducers} from 'redux';
import courses from './courseReducer.js';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import profile from './googleReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    profile,
    ajaxCallsInProgress
});

export default rootReducer;