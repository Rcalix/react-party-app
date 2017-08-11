import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function googleReducer(state = initialState.profile, action) {
    switch (action.type) {
        case types.GET_GOOGLE_PROFILE:
            return action.profile;
        default:
            return state;
        
    }
}