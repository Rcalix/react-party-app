// import GoogleRequest from '../api/googleRequest';
import * as types from './actionTypes';
import axios from 'axios';

export function loadProfileSuccess(profile) {
    return {type: types.GET_GOOGLE_PROFILE, profile};
}

export function getProfile(token) {
    return dispatch => {
        return axios({
            method: 'get',
            url: 'https://www.googleapis.com/userinfo/v2/me?access_token=' + token
        }).then(profile => {
            dispatch(loadProfileSuccess(profile.data));
        }).catch(error => {
            throw(error);
        });
    };
}