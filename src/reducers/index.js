import {combineReducers} from 'redux';
import profile from './googleReducer';

const rootReducer = combineReducers({
    profile
});

export default rootReducer;